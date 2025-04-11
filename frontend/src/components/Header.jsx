import React from "react";
import {
  Box,
  Flex,
  Image,
  InputGroup,
  Input,

} from "@chakra-ui/react";
import { SearchIcon, BellIcon, PaperAirplaneIcon } from "lucide-react";
const Header = () => {
  return (
    <Box className="fixed top-0 left-0 right-0 bg-white border-b border-gray-200 z-50">
      <Flex className="max-w-screen-lg mx-auto h-16 px-4 justify-between items-center">
        <Image src="/api/placeholder/120/40" alt="Instagram" className="h-8" />

        <InputGroup className="max-w-xs w-full mx-4 hidden sm:block">

          <Input
            placeholder="Search"
            className="bg-gray-100"
            size="sm"
            borderRadius="md"
          />
        </InputGroup>

        <Flex className="space-x-4 items-center">
          <IconButton
            aria-label="Search"
            icon={<SearchIcon />}
            variant="ghost"
            className="sm:hidden"
            size="sm"
          />
          <IconButton
            aria-label="Notifications"
            icon={<BellIcon />}
            variant="ghost"
            size="sm"
          />
          <IconButton
            aria-label="Messages"
            icon={<PaperAirplaneIcon className="rotate-45" />}
            variant="ghost"
            size="sm"
          />
        </Flex>
      </Flex>
    </Box>
  );
};

export default Header;
