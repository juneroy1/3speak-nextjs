// README: legacy redirect only

// export async function getServerSideProps(context: any) {
//   const [author, permlink] = context.query.v.split('/')
//   return {
//     redirect: {
//       permanent: false,
//       destination: `/@${author}/${permlink}`,
//     },
//     props:{},
//   };
// }

import Video from "@/components/watch/Video";
import {
  Box,
  Flex,
  Grid,
  GridItem,
  Text,
  Image,
  Link,
  AspectRatio,
  Button,
  Avatar,
} from "@chakra-ui/react";
import { AddIcon, ChevronDownIcon } from "@chakra-ui/icons";
export default function Watch() {
  return (
    <div>
      <Grid templateColumns="repeat(1, 1fr)" gap={2}>
        <GridItem m={2} h="10" bg="white.600">
          <Flex color="white" padding={"10px"}>
            <Box flex="1">
              <Box borderRadius={4} boxShadow="base" mr={2} flex="1" bg="white">
                <Box m={5} bg="white" p={4} color="black">
                  <AspectRatio maxW="100%" height={"500px"} ratio={1}>
                    <iframe
                      title="naruto"
                      src="https://www.youtube.com/embed/QhBnZ6NPOY0"
                      allowFullScreen
                    />
                  </AspectRatio>
                  <Box>
                    <Flex flexDirection={"column"}>
                      <Box>
                        <Text
                          fontSize={"18px"}
                          color="#333"
                          fontWeight={"500"}
                          textTransform="initial"
                          marginTop={"0.5rem"}
                          marginBottom={"0.5rem"}
                          lineHeight={"38px"}
                        >
                          (Esp/Eng) ¡Mis Tres hábitos para un día feliz!
                        </Text>
                        <Text>
                          <span>38</span>
                          <span className="ms-4">Humanitas</span>
                        </Text>
                      </Box>
                      <Flex justifyContent={"end"} marginTop="1rem">
                        <Box>
                          <Flex>
                            <Button colorScheme="gray">
                              OPEN IN THE DESKTOP APP
                            </Button>
                            <Button marginLeft={"10px"} colorScheme="gray">
                              <AddIcon marginRight={"10px"} /> ADD TO PLAYLIST
                            </Button>
                          </Flex>
                          <Flex className="mt-4" justifyContent={"end"}>
                            <Button marginLeft={"10px"} colorScheme="gray">
                              <ChevronDownIcon /> DONATE CRYPTO
                            </Button>
                          </Flex>
                          <Flex className="mt-4" justifyContent={"end"}>
                            <Button marginLeft={"10px"} colorScheme="gray">
                              <ChevronDownIcon />
                              SETTINGS
                            </Button>
                          </Flex>
                        </Box>
                      </Flex>
                    </Flex>
                  </Box>
                </Box>
              </Box>
              <Box borderRadius={4} boxShadow="base" mr={2} flex="1" bg="white">
                <Flex justifyContent={"space-between"}>
                  <Box m={5} bg="white" p={4} color="black">
                    <Flex alignItems={"center"}>
                      <Avatar
                        name="Dan Abrahmov"
                        src="https://bit.ly/dan-abramov"
                      />
                      <Flex flexDirection={"column"} className="ms-4">
                        <Link fontWeight={"bolder"}>stellamartinez</Link>
                        <Text fontSize={"80%"} fontWeight="400">
                          stellamartinez
                        </Text>
                      </Flex>
                    </Flex>
                  </Box>
                  <Box m={5} bg="white" p={4} color="black">
                    <Button marginLeft={"10px"} colorScheme="gray">
                      FOLLOW 47
                    </Button>
                    <Button colorScheme="red">Buzz</Button>
                  </Box>
                </Flex>
              </Box>
            </Box>

            <Box w="33%" bg="white.500" color={"black"}>
              <Grid templateColumns="repeat(1, 1fr)" gap={2}>
                <GridItem
                  marginTop={"1px !important"}
                  m={5}
                  w="100%"
                  h="10"
                  bg="white.600"
                >
                  <Text marginTop={"1px"} fontSize={"2xl"} fontWeight={"bold"}>
                    More from Juneroy quin
                  </Text>
                  <Video videoSrc="https://images.hive.blog/p/99pyU5Ga1kwr5bsMXthzYLbcngN4W2P8NtU9TWTdHC3HaQbjuuRfKKVdjVcJpKJDN8sx7ZjXNkfrVDtAkjdi59a6bGJtSa9MJdsqxYnqALaV6iRcMCMd5TL4RfZMhnbb6e?format=jpeg&mode=cover&width=340&height=191" />
                  <Video videoSrc="https://images.hive.blog/p/99pyU5Ga1kwr5bsMXthzYLbcngN4W2P8NtU9TWTdHC3HaQbjuuRfKKVdjVim5xXXBHudVXW7uT6ErgMsQHTXm2ELwa6JxMMvR1j9aYic2jgGRz4wcXHkeUnAJM5CWiwria?format=jpeg&mode=cover&width=340&height=191" />
                  <Video videoSrc="https://images.hive.blog/p/99pyU5Ga1kwr5bsMXthzYLbcngN4W2P8NtU9TWTdHC3HaQbjuuRfKKVdjVhcN63NCz569HVsSov72VRbsEsSxSrf7JQJBhpsDNxyNfNKrnmLNvLJCfNaX26VjPcZpap3f4?format=jpeg&mode=cover&width=340&height=191" />
                  <Video videoSrc="https://images.hive.blog/p/99pyU5Ga1kwr5bsMXthzYLbcngN4W2P8NtU9TWTdHC3HaQbjuuRfKKVdjVeUsu1qEtX9RpZ8NAWnhCRjimECuPV5shWf4r96HKR9u7G1CQv26vfFSDsFs8k41YwWaDDg6J?format=jpeg&mode=cover&width=340&height=191" />
                  <Video videoSrc="https://images.hive.blog/p/eAyTuXc4toTXvjczQpXyRFR18E7ALGyK7bKRqmpLVRT2K6Dw3vqp1HBU47x9jcw8bRw8xadHDYJ?format=jpeg&mode=cover&width=340&height=191" />
                  <Video videoSrc="https://images.hive.blog/p/eAyTuXc4toTXvjczQpXyRFR18E7ALGyK7gdoY79fNxSmJmDgPua44kR8BdATGS4C3NTPtF7Swv6?format=jpeg&mode=cover&width=340&height=191" />
                  <Video videoSrc="https://images.hive.blog/p/99pyU5Ga1kwr5bsMXthzYLbcngN4W2P8NtU9TWTdHC3HaQbjuuRfKKVdjVbGs8rF69qxxfW7SdHLkQcmo3YEiD4agxV19oco2hcKTPS49UMjd93Xc8X8yvLreZtFoEEgr2?format=jpeg&mode=cover&width=340&height=191" />
                </GridItem>
              </Grid>
            </Box>
          </Flex>
        </GridItem>
      </Grid>
    </div>
  );
}
