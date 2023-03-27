import { Avatar, Box, Flex, Link } from "@chakra-ui/react";
import React from "react";

const Community = () => {
  return (
    <Flex justifyContent={"start"}>
      <Box bg="white" p={4} color="black">
        <Flex alignItems={"center"}>
          <Avatar name="Dan Abrahmov" src="https://bit.ly/tioluwani-kolawole" />
          <Flex flexDirection={"column"} className="ms-4">
            <Link fontWeight={"bolder"}>Humanitas</Link>
          </Flex>
        </Flex>
      </Box>
    </Flex>
    // <div>
    //   <span className="ms-4">Humanitas</span>
    // </div>
  );
};

export default Community;
