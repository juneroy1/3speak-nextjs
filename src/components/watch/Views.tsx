import { ViewIcon } from "@chakra-ui/icons";
import { Text } from "@chakra-ui/react";
import React from "react";

const Views = () => {
  return (
    <Text>
      <ViewIcon fontSize={"20px"} />
      <span className="ms-1">38</span>
      <span className="ms-4">Humanitas</span>
    </Text>
  );
};

export default Views;
