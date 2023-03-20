import { Link, Text } from "@chakra-ui/react";
import React from "react";

const Tags = () => {
  return (
    <Text
      display={"flex"}
      flexWrap="wrap"
      flexDirection={"row"}
      marginBottom={"0.5rem"}
    >
      <Text padding={"0.125rem"}>
        <Link
          background={"#ccc none repeat scroll 0 0"}
          borderRadius="2px"
          display={"inline-block"}
          padding="4px 9px"
          color={"#fff"}
        >
          online hotel booking management system
        </Link>
      </Text>
      <Text padding={"0.125rem"}>
        <Link
          background={"#ccc none repeat scroll 0 0"}
          borderRadius="2px"
          display={"inline-block"}
          padding="4px 9px"
          color={"#fff"}
        >
          system
        </Link>
      </Text>
      <Text padding={"0.125rem"}>
        <Link
          background={"#ccc none repeat scroll 0 0"}
          borderRadius="2px"
          display={"inline-block"}
          padding="4px 9px"
          color={"#fff"}
        >
          3speak speaking
        </Link>
      </Text>
    </Text>
  );
};

export default Tags;
