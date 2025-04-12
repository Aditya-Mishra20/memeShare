import React, { useState } from "react";

const CreatePost = () => {
  // Form validation state
  const [errors, setErrors] = useState({});
  const [selectedImage, setSelectedImage] = useState(null);
  const [isGeneratingAI, setIsGeneratingAI] = useState(false);
  const [userData, setUserData] = useState({
    userName: "",
    userEmail: "",
    userPhoto: "",
  });

  // Form state
  const [formData, setFormData] = useState({
    caption: "",
    tags: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      // Here you would handle saving to database
      console.log("Form submitted with:", {
        ...formData,
        image: selectedImage,
      });

      // Mock API call
      setTimeout(() => {
        setIsModalOpen(false);
        setFormData({ caption: "", tags: "" });
        setSelectedImage(null);
        alert("Meme saved successfully!");
      }, 1000);
    }
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setSelectedImage(e.target.result);
        // Clear image error if it exists
        if (errors.image) {
          setErrors({
            ...errors,
            image: null,
          });
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const generateAIImage = () => {
    setIsGeneratingAI(true);
    // Mock AI generation
    setTimeout(() => {
      setSelectedImage("/api/placeholder/500/300");
      setIsGeneratingAI(false);
      // Clear image error if it exists
      if (errors.image) {
        setErrors({
          ...errors,
          image: null,
        });
      }
    }, 2000);
  };

  const resetForm = () => {
    setFormData({ caption: "", tags: "" });
    setSelectedImage(null);
    setErrors({});
    setIsModalOpen(false);
  };

  // to make some data display on app , retrieved from firebase auth
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      // console.log("userInfo", user);

      if (user) {
        setUserData({
          userName: user.displayName,
          userEmail: user.email,
          userPhoto: user.photoURL,
        });
      }
    });
  }, []);
  // console.log("ddds", userData);

  const validateForm = () => {
    const newErrors = {};

    if (!formData.caption.trim()) {
      newErrors.caption = "Caption is required";
    }

    if (!selectedImage) {
      newErrors.image = "Please upload or generate an image";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e) => {
    console.log(e.target);
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    // Clear error when user types
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: null,
      });
    }
  };

  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      {/* Modal Content */}
      <div className="bg-white rounded-xl max-w-2xl   w-full p-6 shadow-2xl">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold">Create New Meme</h2>
          <button
            onClick={resetForm}
            className="p-1 hover:bg-gray-300 rounded-full"
          >
            {/* <X size={20} /> */}X
          </button>
        </div>

        <form onSubmit={handleSubmit}>
          {/* Image Preview Area */}
          <div className="mb-6">
            {selectedImage ? (
              <div className="relative">
                <img
                  src={selectedImage}
                  alt="Preview"
                  className="w-full h-64 object-cover rounded-lg"
                />
                <button
                  type="button"
                  onClick={() => setSelectedImage(null)}
                  className="absolute top-2 right-2 bg-gray-800/80 p-1 rounded-full hover:bg-gray-700"
                >
                  {/* <X size={16} /> */} X
                </button>
              </div>
            ) : (
              <div className="w-full h-64 bg-gray-300 rounded-lg flex flex-col items-center justify-center">
                <p className="text-gray-400 mb-2">No image selected</p>
                {errors.image && (
                  <p className="text-red-500 text-sm">{errors.image}</p>
                )}
              </div>
            )}
          </div>

          {/* Image Upload & AI Options */}
          <div className="flex flex-wrap gap-4 mb-6">
            {/* Upload Button */}
            <div>
              <input
                type="file"
                id="image-upload"
                accept="image/*"
                className="hidden"
                onChange={handleImageUpload}
              />
              <label
                htmlFor="image-upload"
                className="px-4 py-2 bg-white hover:bg-gray-300 border rounded-lg flex items-center gap-2 cursor-pointer transition"
              >
                {/* <Upload size={16} /> */}
                Upload Image
              </label>
            </div>

            {/* AI Generate Button */}
            <button
              type="button"
              onClick={generateAIImage}
              disabled={isGeneratingAI}
              className="px-4 py-2 bg-white hover:bg-gray-300 border rounded-lg flex items-center gap-2 transition disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {/* <Sparkles size={16} /> */}
              {isGeneratingAI ? "Generating..." : "AI Generate"}
            </button>
          </div>

          {/* Caption Text Area */}
          <div className="mb-6">
            <label htmlFor="caption" className="block mb-2 font-medium">
              Caption
            </label>
            <textarea
              id="caption"
              name="caption"
              rows={3}
              value={formData.caption}
              onChange={handleInputChange}
              className="w-full p-3 bg-gray-300 border border-gray-700 rounded-lg "
              placeholder="Write a caption for your meme..."
            ></textarea>
            {errors.caption && (
              <p className="mt-1 text-red-500 text-sm">{errors.caption}</p>
            )}
          </div>

          {/* Additional Options */}
          <div className="mb-6">
            <label className="block mb-2 font-medium">Tags</label>
            <select name="tags" id="tags" onChange={handleInputChange}>
              <option value={formData.tags}>Select Category--</option>
              <option value="Funny">Funny</option>
              <option value="Sad">Sad</option>
              <option value="Motivational">Motivational</option>
              <option value="Coding">Coding</option>
            </select>
          </div>

          {/* Submit Button */}
          <div className="flex justify-end gap-3">
            <button
              type="button"
              onClick={resetForm}
              className="px-4 py-2 border border-gray-600 rounded-lg hover:bg-gray-300 transition"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 border hover:bg-gray-300 rounded-lg font-medium transition"
            >
              Post
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreatePost;
