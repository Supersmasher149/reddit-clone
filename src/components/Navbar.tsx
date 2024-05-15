import React from "react";
import { Box, Flex } from "@chakra-ui/react";
import { AiFillRedditCircle } from "react-icons/ai";
import { Input, Text, Button } from "@chakra-ui/react";
import { MdChat, MdAdd, MdNotifications } from "react-icons/md";

function Navbar() {
  return (
    <div className="navbar">
        <Flex justify={"space-between"}>
          <AiFillRedditCircle />
          <Box>
            <Input placeholder="Basic usage" />
          </Box>
          <Flex align={"center"} gap={5}>
            <Button>
              <MdChat />
            </Button>
            <Button>
              <MdAdd size={20} />
              <Text fontSize={"small"}>Create</Text>
            </Button>
            <Button>
              <MdNotifications />
            </Button>
          </Flex>
        </Flex>
    </div>
  );
}

export default Navbar;
