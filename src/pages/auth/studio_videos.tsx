import React, { ReactNode, useState } from "react";
import styled from "styled-components";

import {
  IconButton,
  Avatar,
  Box,
  CloseButton,
  Flex,
  HStack,
  VStack,
  Icon,
  useColorModeValue,
  Link,
  Drawer,
  DrawerContent,
  Text,
  useDisclosure,
  BoxProps,
  FlexProps,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Image,
  Heading,
  Card,
  CardBody,
  SimpleGrid,
  CardHeader,
  Stack,
  StackDivider,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  Button,
  TableContainer,
  Table,
  TableCaption,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  Tfoot,
  UnorderedList,
  ListItem,
  Badge,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalFooter,
  ModalBody,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
} from "@chakra-ui/react";
import {
  FiHome,
  FiUpload,
  FiVideo,
  FiUsers,
  FiSettings,
  FiMenu,
  FiBell,
  FiChevronDown,
} from "react-icons/fi";
import { IconType } from "react-icons";
import { ReactText } from "react";
import {
  FaArchive,
  FaChartLine,
  FaCloudUploadAlt,
  FaCog,
  FaExternalLinkAlt,
  FaRegEye,
  FaSignOutAlt,
  FaUserAlt,
  FaUsers,
  FaVideo,
  FaWallet,
} from "react-icons/fa";
import { SlPicture } from "react-icons/sl";

interface LinkItemProps {
  name: string;
  icon: IconType;
}
const LinkItems: Array<LinkItemProps> = [
  { name: "Dashboard", icon: FiHome },
  { name: "Upload", icon: FaCloudUploadAlt },
  { name: "Videos", icon: FaVideo },

  { name: "My Channel", icon: FaExternalLinkAlt },
  { name: "Logout", icon: FaSignOutAlt },
];

export default function StudioVideos({ children }: { children: ReactNode }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const current = new Date();
  const date = `${current.getDate()}/${
    current.getMonth() + 1
  }/${current.getFullYear()}`;

  return (
    <Box minH="100vh" bg={useColorModeValue("gray.100", "gray.900")}>
      <SidebarContent
        onClose={() => onClose}
        display={{ base: "none", md: "block" }}
      />
      <Drawer
        autoFocus={false}
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="full"
      >
        <DrawerContent>
          <SidebarContent onClose={onClose} />
        </DrawerContent>
      </Drawer>
      {/* mobilenav */}
      <MobileNav onOpen={onOpen} />
      <Box ml={{ base: 0, md: 60 }} p="4">
        {children}
        <Box paddingLeft={"1.5rem"} paddingRight="1.5rem">
          <Box>
            <Card>
              <CardBody borderRadius="5px">
                <Box height={"80vh"} width={"100%"}>
                  <Flex
                    height={"100%"}
                    width={"100%"}
                    flexDirection="column"
                    justifyContent={"start"}
                  >
                    <Flex
                      flexDirection={"column"}
                      justifyContent={"start"}
                      alignItems="start"
                    >
                      <Text as={"h2"} fontSize="30px" marginBottom={"10px"}>
                        My Videos
                      </Text>
                      <Alert
                        borderRadius={"5px"}
                        status="warning"
                        marginBottom={"10px"}
                      >
                        <AlertIcon />
                        <AlertTitle fontSize={"16px"}>
                          Important reminder!
                        </AlertTitle>
                        <AlertDescription fontSize={"16px"}>
                          Generally videos will take an hour to encode depending
                          on system load. If takes longer than 1 hour please
                          contact our support on{" "}
                          <Link href="/" color={"blue"}>
                            Discord
                          </Link>
                        </AlertDescription>
                      </Alert>
                      <Alert
                        borderRadius={"5px"}
                        status="warning"
                        marginBottom={"10px"}
                      >
                        <AlertIcon />
                        <AlertTitle fontSize={"16px"}>
                          Important reminder!
                        </AlertTitle>
                        <AlertDescription fontSize={"16px"}>
                          You must reload the page to get the updated status of
                          your videos
                        </AlertDescription>
                      </Alert>

                      <Box marginY={"20px"} width={"100%"}>
                        <Button width={"98%"} colorScheme="blue">
                          Manage Video Boost
                        </Button>
                      </Box>
                      <TableContainer width={"100%"}>
                        <Table variant="striped" colorScheme="gray">
                          {/* <TableCaption>
                            Imperial to metric conversion factors
                          </TableCaption> */}
                          <Thead color={"gray"}>
                            <Tr>
                              <Th>Thumbnail</Th>
                              <Th>Title</Th>
                              <Th>Status</Th>
                              <Th>Date</Th>
                              <Th>Views</Th>
                            </Tr>
                          </Thead>
                          <Tbody>
                            <Tr>
                              <Td>
                                <Image
                                  src="https://ipfs-3speak.b-cdn.net/ipfs/bafybeibqxbf652lmfbdf7zoht3pbhkx4m76agdwn5mnw33vjhlxrzvccoe/"
                                  alt="test"
                                  width={"100px"}
                                />
                              </Td>
                              <Td>First Video</Td>
                              <Td>
                                <Badge colorScheme="red">Deleted</Badge>
                              </Td>
                              <Td>{date}</Td>
                              <Td>100</Td>
                            </Tr>
                            <Tr>
                              <Td>
                                <Image
                                  src="https://ipfs-3speak.b-cdn.net/ipfs/bafybeibqxbf652lmfbdf7zoht3pbhkx4m76agdwn5mnw33vjhlxrzvccoe/"
                                  alt="test"
                                  width={"100px"}
                                />
                              </Td>
                              <Td>Secod Video</Td>
                              <Td>
                                <Badge colorScheme="green">Active</Badge>
                              </Td>
                              <Td>{date}</Td>
                              <Td>200</Td>
                            </Tr>
                            <Tr>
                              <Td>
                                <Image
                                  src="https://ipfs-3speak.b-cdn.net/ipfs/bafybeibqxbf652lmfbdf7zoht3pbhkx4m76agdwn5mnw33vjhlxrzvccoe/"
                                  alt="test"
                                  width={"100px"}
                                />
                              </Td>
                              <Td>Third Video</Td>
                              <Td>
                                <Badge colorScheme="purple">New</Badge>
                              </Td>
                              <Td>{date}</Td>
                              <Td>1M</Td>
                            </Tr>
                          </Tbody>
                        </Table>
                      </TableContainer>
                    </Flex>
                  </Flex>
                </Box>
              </CardBody>
            </Card>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

interface SidebarProps extends BoxProps {
  onClose: () => void;
}

const SidebarContent = ({ onClose, ...rest }: SidebarProps) => {
  const { isOpen, onOpen, onClose: onCloseModal } = useDisclosure();
  return (
    <Box
      transition="3s ease"
      bg={useColorModeValue("white", "gray.900")}
      borderRight="1px"
      borderRightColor={useColorModeValue("gray.200", "gray.700")}
      w={{ base: "full", md: 60 }}
      pos="fixed"
      h="full"
      {...rest}
    >
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>CONNECT WALLET</ModalHeader>
          <ModalCloseButton onClick={onCloseModal} />
          <ModalBody>
            <Text>
              Choose how you want to connect. There are several wallet providers
            </Text>
            <Box marginTop={"20px"}>
              <Tabs>
                <TabList>
                  <Tab>Ethereum</Tab>
                  <Tab>HIVE</Tab>
                </TabList>

                <TabPanels>
                  <TabPanel>
                    <Text>Popular</Text>
                    <Card>
                      <CardBody>
                        <Flex
                          cursor={"pointer"}
                          justifyContent={"cemter"}
                          alignItems="center"
                        >
                          <Image
                            width={"30px"}
                            src="data:image/png;base64,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"
                            alt="metamask"
                          />
                          <Text marginLeft={"10px"} fontWeight="bold">
                            Install Metamask
                          </Text>
                        </Flex>
                      </CardBody>
                    </Card>
                    <Flex
                      marginTop={"20px"}
                      justifyContent="space-between"
                      alignItems={"center"}
                    >
                      <Button>Back</Button>
                      <Button colorScheme={"blue"}>Next</Button>
                    </Flex>
                  </TabPanel>
                  <TabPanel>
                    <Text>Hive</Text>
                  </TabPanel>
                </TabPanels>
              </Tabs>
            </Box>
          </ModalBody>

          <ModalFooter>
            {/* <Button colorScheme="blue" mr={3} onClick={onCloseModal}>
              Close
            </Button>
            <Button variant="ghost">Secondary Action</Button> */}
          </ModalFooter>
        </ModalContent>
      </Modal>
      <Flex
        h="20"
        alignItems="center"
        mx="8"
        justifyContent="space-between"
        marginBottom={"100px"}
      >
        {/* <Text fontSize="2xl" fontFamily="monospace" fontWeight="bold">
          Logo
        </Text> */}
        <Flex
          flexDirection={"column"}
          justifyContent="center"
          alignItems={"center"}
          width="100%"
        >
          <StyledLink href="/">
            <Box
              display={"flex"}
              justifyContent="center"
              alignItems={"center"}
              width={"180px"}
              marginTop="100px"
            >
              <Image
                src="/main_logo.svg"
                alt="3speak logo"
                width={100}
                height={100}
              />
            </Box>
          </StyledLink>
          <Button onClick={onOpen} width={"100%"} padding="10px">
            LOG IN / SIGN UP
          </Button>
        </Flex>

        <CloseButton display={{ base: "flex", md: "none" }} onClick={onClose} />
      </Flex>
      {LinkItems.map((link) => (
        <NavItem color={"#6e707e"} key={link.name} icon={link.icon}>
          {link.name}
        </NavItem>
      ))}
    </Box>
  );
};

interface NavItemProps extends FlexProps {
  icon: IconType;
  children: ReactText;
}
const NavItem = ({ icon, children, ...rest }: NavItemProps) => {
  return (
    <Link
      href="#"
      style={{ textDecoration: "none" }}
      _focus={{ boxShadow: "none" }}
    >
      {/* _hover=
      {{
        bg: "gray.400",
        color: "white",
      }} */}
      <Flex
        align="center"
        p="4"
        mx="4"
        borderRadius="lg"
        role="group"
        cursor="pointer"
        {...rest}
      >
        {icon && (
          <Icon
            mr="4"
            fontSize="16"
            _groupHover={{
              color: "black",
            }}
            as={icon}
          />
        )}
        {children}
      </Flex>
    </Link>
  );
};

interface MobileProps extends FlexProps {
  onOpen: () => void;
}
const MobileNav = ({ onOpen, ...rest }: MobileProps) => {
  return (
    <Flex
      ml={{ base: 0, md: 60 }}
      px={{ base: 4, md: 4 }}
      height="20"
      alignItems="center"
      bg={useColorModeValue("white", "gray.900")}
      borderBottomWidth="1px"
      borderBottomColor={useColorModeValue("gray.200", "gray.700")}
      justifyContent={{ base: "space-between", md: "flex-end" }}
      {...rest}
    >
      <IconButton
        display={{ base: "flex", md: "none" }}
        onClick={onOpen}
        variant="outline"
        aria-label="open menu"
        icon={<FiMenu />}
      />

      <Text
        display={{ base: "flex", md: "none" }}
        fontSize="2xl"
        fontFamily="monospace"
        fontWeight="bold"
      >
        Logo
      </Text>

      <HStack spacing={{ base: "0", md: "6" }}>
        <IconButton
          size="lg"
          variant="ghost"
          aria-label="open menu"
          icon={<FiBell />}
        />
        <Flex alignItems={"center"}>
          <Menu>
            <MenuButton
              py={2}
              transition="all 0.3s"
              _focus={{ boxShadow: "none" }}
            >
              <HStack>
                <Avatar
                  size={"sm"}
                  src={
                    "https://images.unsplash.com/photo-1619946794135-5bc917a27793?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9"
                  }
                />
                <VStack
                  display={{ base: "none", md: "flex" }}
                  alignItems="flex-start"
                  spacing="1px"
                  ml="2"
                >
                  <Text fontSize="sm">Justina Clark</Text>
                  <Text fontSize="xs" color="gray.600">
                    Admin
                  </Text>
                </VStack>
                <Box display={{ base: "none", md: "flex" }}>
                  <FiChevronDown />
                </Box>
              </HStack>
            </MenuButton>
            <MenuList
              bg={useColorModeValue("white", "gray.900")}
              borderColor={useColorModeValue("gray.200", "gray.700")}
            >
              <MenuItem>Profile</MenuItem>
              <MenuItem>Settings</MenuItem>
              <MenuItem>Billing</MenuItem>
              <MenuDivider />
              <MenuItem>Sign out</MenuItem>
            </MenuList>
          </Menu>
        </Flex>
      </HStack>
    </Flex>
  );
};

const StyledLink = styled(Link)`
  cursor: pointer;
`;
