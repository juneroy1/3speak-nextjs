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
import { useState } from "react";
export default function Watch() {
  const [showLess, setShowLess] = useState(true);
  const showLessFunction = () => {
    setShowLess(!showLess);
  };

  return (
    <Box background={"#EFF4F5"}>
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
              <Box
                marginBottom={"30px"}
                borderRadius={4}
                boxShadow="base"
                mr={2}
                flex="1"
                bg="white"
              >
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

              <Box borderRadius={4} boxShadow="base" mr={2} flex="1" bg="white">
                <Box
                  marginBottom={"30px"}
                  padding="15px"
                  borderRadius={"2px"}
                  boxShadow="0 0 11px #ececec;"
                  transitionDuration={"0.4s"}
                  background="#fff none repeat scroll 0 0"
                >
                  <Text color={"black"} fontSize={"15px"} fontWeight="600">
                    About:
                  </Text>
                  <Box
                    maxHeight={showLess ? "200px" : "initial"}
                    overflow="hidden"
                    paddingBottom={"10px"}
                  >
                    <span className="description">
                      <Text color={"black"}>
                        Hotel management is really about successfully overseeing
                        every operation of the business to make sure consistent
                        growth and development. This can involve the management
                        of anything related to the hotel industry and needs
                        knowledge of distribution strategy, finance and
                        accounts, customer service, staff management, marketing,
                        catering management, hotel administration and more.
                        Hotel management software is a technology that permits
                        hotel operators and owners to streamline their
                        administrative tasks while also increasing their
                        bookings in both the short and long term. Your hotel
                        management system is not only important for your own
                        day-to-day operations, but it is a vital part of
                        improving the overall guest experience. From the
                        beginning of your customers’ online booking journey
                        until the completion of their stay and their feedback
                        once they return home, your hotel management system is
                        there to enhance their experience. Finding a hotel
                        management system that provides the features you both
                        need and want is necessary to effectively manage your
                        hotel in the global economic climate. Hotel management
                        software is increasingly important for those in the
                        hotel industry, offering more efficient, cost-effective
                        ways to take care of many tasks and operations. In this
                        article, you`ll learn about the various hotel management
                        software solutions that are available, as well as the
                        key benefits hotel software can actually provide. Put
                        simply, hotel management software refers to any software
                        package that`s designed to assist with the day-to-day
                        management of a hotel, resort or similar property.
                        Examples of this include property management systems
                        (PMS), revenue management systems, rate shopper
                        software, reputation management software and channel
                        managers. These solutions are popular within the hotel
                        and hospitality industry, allowing tasks that previously
                        required to be carried out manually on paper to be
                        performed digitally – typically with some degree of
                        automation. How it Works? Travelopro provides easy and
                        practical solutions to common problems in day to day
                        running of hotels. Our hotel software that provides
                        total control over the entire operations of the hotel is
                        programmed to make life comfortable for the guests and
                        easier for the hoteliers. Travelopro eliminates the risk
                        of loss of paper files and saves the huge time taken for
                        manual processes. Every data will be readily available
                        with a mouse click. Our advanced search options which
                        filter data as per the required criteria and returns
                        quick accurate results. Travelopro safekeeps all guest
                        records, invoice, payment details thereby ensuring
                        continuity in guest visits. Allow fast &amp; easy check
                        in &amp; check out process also handling individual and
                        group bookings becomes trouble free. Once the customer
                        Checked in, then every aspect of that customer could be
                        managed and tracked with our software like food bills,
                        complimentary services, software such as food bills,
                        complimentary services, taxi bills, laundry bills,
                        advances, part payments and so on. For hotel owners who
                        wish to grow their business, ensure guest satisfaction
                        and loyalty to their brand, investing in Hospitality
                        Software Travelopro is no longer an option – it’s a
                        necessity. Designed to simplify frontend and backend
                        operations, Travelopro Hotel Management System is one of
                        the most comprehensive hotel management ERP solutions
                        available today. Right from reservation to inventory
                        management housekeeping and financial accounting, our
                        Travelopro hotel management software all over world
                        integrates all essential operations to simplify everyday
                        functionality for hotel personnel. Hotel Management
                        Software Solutions There are a range of hotel management
                        software solutions that management staff can use to make
                        daily tasks and operations easier and more efficient. At
                        the bare minimum, every modern hotel requires a property
                        management system (PMS), as this will allow you to
                        digitally manage bookings, your calendar, and more.
                        Aside from the use of a PMS, many hotels also utilize a
                        variety of other solutions, including revenue management
                        systems, which assist with optimising financial results;
                        distribution channel managers, which assist with
                        inventory distribution across the various channels;
                        mobile check-in apps, which improve the customer
                        experience; and reputation and review management
                        software, which can be used to manage online feedback on
                        a variety of platforms. These solutions can be used
                        individually, but many can also be connected together,
                        and this integration permits data to be shared between
                        them. Additionally, some software providers provide
                        all-in-one solutions. Benefits of Using Hotel Management
                        Software In the modern, digital age, hotel software is
                        utilized for a range of different purposes, but
                        convenience, efficiency, accuracy and financial benefits
                        are chief among them. Below, youll find five specific
                        advantages associated with the use of hotel management
                        software solutions within a property. Streamlined
                        Processes A major benefit that can be gained from
                        adopting a different of hotel management software
                        solutions is the ability to streamline processes. From
                        automating many of the distribution tasks, to generating
                        financial reports in an instant, software applications
                        can build almost everything more efficient. Reduced
                        Costs Although hotel software requires an initial
                        financial investment, over a longer time period these
                        applications and systems can lead to important
                        cost-savings. This is because less human involvement is
                        essential in many day-to-day processes, while money can
                        also be saved in a number of other areas. Increased
                        Revenue In addition to helping, you to save money, hotel
                        management software can also assist to increase the
                        amount of revenue you generate. For instance, revenue
                        management systems can permit you to optimise pricing
                        and distribution, using past data, existing data in the
                        books and wider industry data to help you to accurately
                        anticipate demand. Improved Customer Experience Another
                        reason why hotel management software can be beneficial
                        is because it can significantly enhance the customer
                        experience you provide. One of the most obvious examples
                        of this is the use of mobile hotel check-in and
                        check-out systems, which permit for much more seamless
                        arrivals and departures. Competitive Advantage Finally,
                        one of the single most convincing reasons why you should
                        use hotel management software solutions is the potential
                        to gain a competitive advantage over rivals. Many
                        software packages will deliver valuable real-time
                        industry insights, allowing you to be more competitive
                        in terms of room rates, or package discounts. Hotel
                        Management System software has the following key
                        features: • Multiple Hotels / Branch • Dashboard •
                        Check-in • Reservation • Housekeeping • Configuration
                        (Inventory, Room Types, Services, Customers, Check-In,
                        Check Out, Alerts, Taxes, Amenities) • Purchase order •
                        Manage Sales, Shop • User creation • Manage user roles,
                        rights • User log • Bulk Email • Accounts and Billing •
                        Print bill • Reports (Customers, Discounts, Inventory,
                        Sales, Shifts etc.) CONCLUSION: For more details, please
                        visit our website:{" "}
                        <a
                          href="https://www.travelopro.com/hotel-management-software.php"
                          rel="nofollow noopener"
                          title="Link expanded to plain text; beware of a potential phishing attempt"
                        >
                          https://www.travelopro.com/hotel-management-software.php
                        </a>
                      </Text>
                    </span>
                  </Box>
                  <Box
                    onClick={() => showLessFunction()}
                    borderTop={"1px solid rgba(0,0,0,0.2)"}
                    cursor="pointer"
                  >
                    <Text className="text-dark" textAlign={"center"}>
                      {showLess ? "Show more" : "Show less"}
                    </Text>
                  </Box>
                  <Text color={"black"} fontSize="15px" fontWeight={"600"}>
                    Tags:
                  </Text>
                  <Text display={"flex"} flexWrap="wrap" flexDirection={"row"}>
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
                    <Text padding={"0.125rem"}>
                      <Link
                        background={"#ccc none repeat scroll 0 0"}
                        borderRadius="2px"
                        display={"inline-block"}
                        padding="4px 9px"
                        color={"#fff"}
                      >
                        tag a team
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
                        this is a test show
                      </Link>
                    </Text>
                  </Text>
                </Box>
              </Box>
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
                        To comment on this video please connect a HIVE account
                        to your profile: <Link>Connect HIVE Account</Link>
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
                  This video has no comments yet. To write a comment login and
                  click the `Reply` button below the video player.
                </Text>
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
    </Box>
  );
}
