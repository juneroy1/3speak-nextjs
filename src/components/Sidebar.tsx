import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import styled from "styled-components";
import { Box } from "./Box";
import { Flex } from "./Flex";
import { Typography } from "./Typography";
import { useTranslation } from "next-export-i18n";
import { useRouter } from "next/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAndroid,
  faAppStore,
  faAppStoreIos,
  faDiscord,
  faTelegram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faMobileAndroid } from "@fortawesome/free-solid-svg-icons";
import {
  Menu,
  MenuButton,
  MenuGroup,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
const threespeak = {
  filter: "drop-shadow(2px 4px 6px black)",
};
// juneroy
const navblog = {
  filter: "brightness(0.45)",
};
const NAVIGATION = [
  {
    img: "nav/home.svg",
    title: "nav.home",
    route: "/newindex",
  },
  {
    img: "nav/smile.svg",
    title: "nav.first",
    route: "/firstTime",
  },
  {
    img: "nav/fire.svg",
    title: "nav.trending",
    route: "/newcomers2",
  },
  {
    img: "nav/play.svg",
    title: "nav.new",
    route: "/new2",
  },

  {
    img: "nav/communities.svg",
    title: "nav.communities",
    route: "/communities",
  },
  {
    img: "nav/leaderboard.svg",
    title: "nav.leaderboard",
    route: "/leaderboard",
  },
  {
    img: "nav/download.svg",
    title: "download_apps",
  },
  {
    img: "nav/spk_network.png",
    title: "about_3speak",
  },
];

export const Sidebar = () => {
  const router = useRouter();
  const [communitiesPopup, setCommunitiesPopup] = useState(false);
  const [search, setSearch] = useState("");
  const { t } = useTranslation();

  return (
    <Flex p="1rem" flexDirection="column">
      <Flex justifyContent="center" width="100%">
        <StyledLink href="/">
          <Box width={"180px"}>
            <Image
              src="/main_logo.svg"
              alt="3speak logo"
              width={200}
              height={100}
            />
          </Box>
        </StyledLink>
      </Flex>
      <Box mb="1rem" width="100%">
        <Link href="/auth/login">
          <StyledButton py={3}>{t("mainLogin")}</StyledButton>
        </Link>
      </Box>
      <Box>
        {NAVIGATION.map(({ img, title, route }) => (
          <StyledNav
            onClick={() =>
              route ? router.push(route) : setCommunitiesPopup(true)
            }
            width="100%"
            py="1rem"
            px="0.5rem"
            key={`nav_sidebar_${title}`}
            justifyContent="flex-start"
            alignItems="center"
          >
            <Box mr="1rem" maxWidth="25px">
              <StyledImage src={`/${img}`} alt={title} width={30} height={30} />
            </Box>
            {title == "download_apps" && (
              <Menu>
                <MenuButton>Download 3Speak Apps</MenuButton>
                <MenuList
                  boxShadow={"0 1px 4px rgba(0,0,0,0.3)"}
                  border="none"
                  padding={"10px"}
                  width="180px"
                >
                  <MenuGroup
                    title="Download 3Speak Apps"
                    fontWeight={"bold"}
                    fontSize="13px"
                  >
                    <MenuItem>iOS App</MenuItem>
                    <MenuItem>Android App </MenuItem>
                    <MenuItem>Desktop App </MenuItem>
                  </MenuGroup>
                </MenuList>
              </Menu>
            )}
            {title == "about_3speak" && (
              <Menu>
                <MenuButton>About 3Speak</MenuButton>
                <MenuList
                  boxShadow={"0 1px 4px rgba(0,0,0,0.3)"}
                  border="none"
                  padding={"10px"}
                  width="180px"
                >
                  <MenuGroup
                    title="About 3Speak"
                    fontWeight={"bold"}
                    fontSize="13px"
                  >
                    <MenuItem>About Us</MenuItem>
                    <MenuItem>FAQ</MenuItem>
                    <MenuItem>Telegram</MenuItem>
                    <MenuItem>Discord</MenuItem>
                    <MenuItem>Twitter</MenuItem>
                    <MenuItem>3Speak - important links</MenuItem>
                    <MenuItem>SPK network</MenuItem>
                    <MenuItem>SPK network - important link</MenuItem>
                  </MenuGroup>
                </MenuList>
              </Menu>
            )}
            {title != "download_apps" && title != "about_3speak" && (
              <Typography>{t(title)}</Typography>
            )}
          </StyledNav>
        ))}
      </Box>
      <Flex width="100%" alignItems="center" mt="1rem">
        <Box maxWidth="2rem">
          <Image
            alt="search icon"
            src="/nav/search.svg"
            width={45}
            height={45}
          />
        </Box>
        <StyledInput
          onChange={(e) => setSearch(e.target.value)}
          onKeyDown={(e) =>
            e.key === "Enter" &&
            router.push(`/search?q=${search.split(" ").join("+")}`)
          }
          placeholder="Search"
          type="text"
        />
      </Flex>
      <Typography mb="0.5rem" mt="1rem">
        3Speak
      </Typography>
      <Box ml="0.5rem" mt="1rem">
        <AboutText
          onClick={() => router.push("/about-us")}
          color="rgba(0,0,0,0.5)"
          mb="1rem"
        >
          {t("aboutUs")}
        </AboutText>
        <AboutText
          onClick={() => router.push("/faq")}
          color="rgba(0,0,0,0.5)"
          mb="1rem"
        >
          {t("faq")}
        </AboutText>
      </Box>
      <Box className="nav-item text-center ">
        <Link
          target="_blank"
          href="https://twitter.com/3speakonline?utm_source=3speak.tv"
        >
          <FontAwesomeIcon
            className="fa-2x text-secondary ms-3 mb-1"
            icon={faTwitter}
          />
        </Link>
        <Link
          target="_blank"
          href="https://t.me/threespeak?utm_source=3speak.tv"
        >
          <FontAwesomeIcon
            className="fa-2x text-secondary ms-3 mb-1"
            icon={faTelegram}
          />
        </Link>
        <Link target="_blank" href="https://discord.gg/NSFS2VGj83">
          <FontAwesomeIcon
            className="fa-2x text-secondary ms-3 mb-1"
            icon={faDiscord}
          />
        </Link>
        <Link
          target="_blank"
          title="Visit Our Blog"
          href="https://hive.blog/@threespeak"
        >
          <span className="ms-3">
            <StyledImage
              src="/nav/blog.png"
              alt={"3speak blog"}
              width={30}
              height={30}
              style={navblog}
            />
          </span>
        </Link>
        <Link target="_blank" title="SPK Network" href="https://spk.network">
          <span className="ms-3">
            <StyledImage
              src="/nav/spk_network.png"
              alt={"SPK Network"}
              width={30}
              height={30}
              style={threespeak}
            />
          </span>
        </Link>
        <Link target="_blank" href="https://testflight.apple.com/join/0tipqwsZ">
          <FontAwesomeIcon
            className="fa-2x text-secondary ms-3"
            icon={faAppStoreIos}
          />
        </Link>
        <Link
          target="_blank"
          href="https://appdistribution.firebase.dev/i/047cfb506633e639"
        >
          <FontAwesomeIcon
            className="fa-2x text-secondary ms-3"
            icon={faAndroid}
          />
        </Link>
      </Box>
    </Flex>
  );
};

const AboutText = styled(Typography)`
  cursor: pointer;
  transition: all 0.2s ease-in;

  &:hover {
    color: black;
  }
`;

const StyledLink = styled(Link)`
  cursor: pointer;
`;

const StyledInput = styled.input`
  outline: none;
  border: none;
  border-bottom: 1px solid rgba(0, 0, 0, 0.5);
  padding: 1rem 0.5rem 0.5rem;
  margin-left: 0.5rem;
  margin-bottom: 1rem;
`;

const StyledNav = styled(Flex)`
  cursor: pointer;
  color: rgba(0, 0, 0, 0.5);
  transition: all 0.25s ease-in;

  svg {
    path {
      fill: rgba(0, 0, 0, 0.5);
    }
  }

  &:hover {
    color: black;
  }
`;

const StyledImage = styled(Image)`
  svg {
    color: rgba(0, 0, 0, 0.5);
  }
`;

const StyledButton = styled(Box)`
  box-shadow: 0 1px 4px rgb(0 0 0 / 40%);
  width: 100%;
  text-align: center;
  cursor: pointer;
`;
