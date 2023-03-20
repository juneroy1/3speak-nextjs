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
      <Text padding={"0.125rem"} paddingLeft={"0px"}>
        <Link
          href="#"
          color={"blue"}
          display={"inline-block"}
          padding="4px 9px"
          paddingLeft={"0px"}
        >
          #online hotel booking management system
        </Link>
      </Text>
      <Text padding={"0.125rem"}>
        <Link
          href="#"
          color={"blue"}
          display={"inline-block"}
          padding="4px 9px"
        >
          #system
        </Link>
      </Text>
      <Text padding={"0.125rem"}>
        <Link
          href="#"
          color={"blue"}
          display={"inline-block"}
          padding="4px 9px"
        >
          #3speak speaking
        </Link>
      </Text>
    </Text>
  );
};

export default Tags;
