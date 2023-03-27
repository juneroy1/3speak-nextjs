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
      <Text>
        <Link href="#" color={"blue"} display={"inline-block"}>
          #onlinehotelbookingmanagementsystem&nbsp;
        </Link>
      </Text>
      <Text>
        <Link href="#" color={"blue"} display={"inline-block"}>
          #system&nbsp;
        </Link>
      </Text>
      <Text>
        <Link href="#" color={"blue"} display={"inline-block"}>
          #3speakspeaking
        </Link>
      </Text>
    </Text>
  );
};

export default Tags;
