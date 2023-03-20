import { Box, Link, Text } from "@chakra-ui/react";
import React from "react";

const Comment = () => {
  return (
    <Box>
      <Text
        color={"black"}
        fontSize={"0.8125rem"}
        marginBottom="0.5rem"
        fontWeight={"500"}
        lineHeight="1.2"
      >
        Comments:
      </Text>
      <Box
        marginBottom={"0.5rem !important"}
        marginTop="0.25rem !important"
        padding={"15px"}
        background="#fff none repeat scroll 0 0"
        borderRadius={"2px"}
        boxShadow="0 0 11px #ececec"
        transitionDuration={"0.4s"}
      >
        <Box>
          <Box
            maxWidth={"100%"}
            width="100%"
            paddingRight={"15px"}
            paddingLeft="15px"
          >
            <Text
              color={"#666"}
              fontSize="0.8125rem"
              marginBottom={"0.5rem"}
              fontWeight="500"
              lineHeight={"1.2"}
            >
              Reply:
            </Text>
            <Text
              background={
                "#9C27B0 linear-gradient(180deg, #ab47bc, #9C27B0) repeat-x"
              }
              color="#fff"
              paddingRight={"2.5rem"}
              border="none"
              padding={"0.75rem 1.25rem"}
              marginBottom="1rem"
              borderRadius={"0.25rem"}
            >
              To comment on this video please connect a HIVE account to your
              profile: <Link>Connect HIVE Account</Link>
            </Text>
          </Box>
        </Box>
      </Box>
      <Text
        background={
          "#9C27B0 linear-gradient(180deg, #ab47bc, #9C27B0) repeat-x"
        }
        color="#fff"
        paddingRight={"2.5rem"}
        border="none"
        padding={"0.75rem 1.25rem"}
        marginBottom="1rem"
        borderRadius={"0.25rem"}
      >
        This video has no comments yet. To write a comment login and click the
        `Reply` button below the video player.
      </Text>
    </Box>
  );
};

export default Comment;
