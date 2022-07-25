import { BlitzPage } from "blitz"
import { Img } from "@chakra-ui/react"
import Layout from "app/core/layouts/Layout"

import {
  Heading,
  Box,
  Text,
  Flex,
  Avatar,
  Spacer,
  Grid,
  GridItem,
  Button,
  Divider,
  Tooltip,
} from "@chakra-ui/react"

import { Link } from "react-scroll"

import CustomSection from "app/core/components/CustomSection"
import FloatingMenu from "app/core/components/FloatingMenu"

import { BsTwitter, BsInstagram, BsLinkedin, BsGithub } from "react-icons/bs"

import Footer from "app/core/components/Footer"

const CustomerCard = (props: { name: string; href: string; bg: string }) => {
  return (
    <GridItem
      textAlign="center"
      borderRadius="2xl"
      bg="black"
      color="white"
      p="2"
      css={`
        &:hover {
          background: white;
          color: black;
          text-decoration: underline;
        }
      `}
    >
      <a href={props.href} target="_blank" rel="noreferrer">
        <Text mb="2" textAlign="center" fontSize="24px" fontWeight="bold" cursor="pointer">
          @&nbsp;{props.name}
        </Text>
        <Box
          w="100%"
          h={{ sm: "180px", md: "400px", xl: "180px" }}
          overflow="hidden"
          margin="0 auto"
        >
          <Img
            w="100%"
            h={{ sm: "180px", md: "400px", xl: "180px" }}
            src={props.bg}
            backgroundSize="cover"
            backgroundPosition="center"
            alt={props.name}
            css={`
              transition: all 0.5s ease-out;
              &:hover {
                transform: scale(1.1);
              }
            `}
          />
        </Box>
      </a>
    </GridItem>
  )
}

const Home: BlitzPage = () => {
  return (
    <div id="top" className="container">
      <CustomSection bg="url(./img/clonex_001.jpeg)" bgMobile="url(./img/clonex_001_mobile.jpeg)">
        <Spacer h="100%" />
        <Flex className="about_content" direction="column">
          <Spacer h="100%" />
          <Box m="4" maxW={{ sm: "none", md: "33vw" }}>
            <Flex direction="column" bg="rgba(0,0,0,.7)" borderRadius="2xl" p="4" mb="4">
              <Heading color="#cc9a54" w="100%">
                Game Maker &amp; Web Dev
              </Heading>
              <Text my="6" fontSize="xl" color="white">
                With more than fifteen years <strong>building</strong> and{" "}
                <strong>revolutionizing</strong> the <strong>web</strong>, I can help you create and
                assert your project.
              </Text>
              <Box alignSelf="center">
                <Link to="about" smooth={true}>
                  <Button className="detail">About me</Button>
                </Link>
              </Box>
            </Flex>
          </Box>
        </Flex>
      </CustomSection>
      <CustomSection
        id="about"
        bg="url(./img/clonex_002.jpeg)"
        bgMobile="url(./img/clonex_002_mobile.jpeg)"
      >
        <Spacer w="100%" />
        <Box borderRadius="2xl" overflow="hidden" alignSelf="center" m="4">
          <Flex direction="column" bg="rgba(0,0,0,.5)" color="white" maxW="800px" w="100%">
            <Flex bg="#63696d" color="#cc9a54" p="4">
              <Flex>
                <Avatar name="Axel Fiolle" src="./img/avatar.jpeg" />
                <Heading fontSize="3xl" ml="4" lineHeight="48px">
                  <Text display="none">FullStack </Text>
                  <Text>
                    Web dev<Text display="none">eloper</Text> passionate about new tech
                    <Text display="none">nologie</Text>s
                  </Text>
                </Heading>
              </Flex>
            </Flex>
            <Flex direction="column" p="4">
              <Text pb="4">
                Hello, my name is Axel Fiolle, alias <strong>Andaroth</strong>.
              </Text>
              <Text pb="4">
                I was young when I wrote my first line of code, I always have been interested in the
                computering world.
                <br />
                At first, I learned to handle any design tool and then discovered the{" "}
                <strong>art of code</strong> by myself.
              </Text>
              <Text>
                My natural taste of unknown and my initiative made me discover a lot of wonders,{" "}
                <br />
                let me help you getting online and expands all over the Internet !
              </Text>
            </Flex>
            <Grid
              templateColumns="repeat(4, 1fr)"
              width="50%"
              margin="0 auto"
              textAlign="center"
              my="4"
            >
              <GridItem textAlign="center" m="2">
                <Tooltip label="Join me on LinkedIn">
                  <a
                    href="https://www.linkedin.com/in/axel-fiolle/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <BsLinkedin className="react-icons" />
                  </a>
                </Tooltip>
              </GridItem>
              <GridItem textAlign="center" m="2">
                <Tooltip label="Check my GitHub code">
                  <a href="https://github.com/Andaroth" target="_blank" rel="noreferrer">
                    <BsGithub className="react-icons" />
                  </a>
                </Tooltip>
              </GridItem>
              <GridItem textAlign="center" m="2">
                <Tooltip label="Follow me on Twitter">
                  <a href="https://twitter.com/Andaroth" target="_blank" rel="noreferrer">
                    <BsTwitter className="react-icons" />
                  </a>
                </Tooltip>
              </GridItem>
              <GridItem textAlign="center" m="2">
                <Tooltip label="Follow me on Instagram">
                  <a href="https://instagram.com/an.da.ro.th" target="_blank" rel="noreferrer">
                    <BsInstagram className="react-icons" />
                  </a>
                </Tooltip>
              </GridItem>
            </Grid>
            <Divider />
            <Box w="100%" textAlign="center">
              <Link to="work" smooth={true}>
                <Button className="detail" m="4">
                  Discover my work
                </Button>
              </Link>
            </Box>
          </Flex>
        </Box>
        <Spacer w="100%" />
      </CustomSection>
      <CustomSection
        id="work"
        bg="linear-gradient(315deg, rgba(21,102,255,1) 0%, rgba(148,20,161,1) 57%)"
      >
        <Flex direction="column" w="100%">
          <Spacer h="100%" />
          <Box alignSelf="center">
            <Flex
              direction="column"
              bg="rgba(0,0,0,.7)"
              borderRadius="2xl"
              p="6"
              color="white"
              textAlign="center"
              m="4"
            >
              <Heading as="h2" fontSize="4xl" mb="4">
                <Text display="none">I have multiple </Text>
                <strong>Web3</strong> &amp; <strong>Blockchain</strong>
                <Text display="none"> experiences:</Text>
              </Heading>
              <Text maxW={{ sm: "none", md: "50%" }} margin="0 auto">
                I used to work with the best Web3 actors who trust me to implement their website
                perfectly.
              </Text>
              <Text my="2">
                <strong>My skills are refined and precise, I am like a ninja 🥷</strong>
              </Text>
              <Grid
                templateColumns={{ lg: "repeat(1, 1fr)", xl: "repeat(3, 1fr)" }}
                gap={6}
                w="100%"
                alignSelf="center"
                mt="2"
              >
                <CustomerCard name="RTFKT" bg="./img/c2c/rtfkt.jpeg" href="https://rtfkt.com/" />
                <CustomerCard
                  name="GameOfBlocks"
                  bg="./img/c2c/screenshot.jpeg"
                  href="https://gameofblocks.io/"
                />
                <CustomerCard
                  name="EtheRPG Online"
                  bg="./img/c2c/etherpg.jpeg"
                  href="https://etherpg.online/"
                />
              </Grid>
              <a href="mailto:ax.fiolle@gmail.com">
                <Button mt="6" className="detail large" fontSize="2xl">
                  Get in touch
                </Button>
              </a>
            </Flex>
          </Box>
          <Spacer h="100%" />
        </Flex>
      </CustomSection>

      <Footer />

      <FloatingMenu page="home" />

      <style jsx global>{`
        strong {
          color: #cc9a54;
        }
        button.detail {
          padding: 24px;
          background: #2e3133;
          color: white;
          border-bottom: 2px solid #cc9a54;
        }
        button.detail.large {
          padding: 32px 24px;
          font-size: 32px;
        }
        button.detail.small {
          padding: 12px;
        }
        button.detail:hover {
          background: #cc9a54;
          color: white;
        }

        .react-icons {
          font-size: 24px;
          margin: 0 auto;
        }
        .react-icons:hover {
          color: #cc9a54;
        }

        @media screen and (max-width: 800px) {
          .about_content {
            margin-top: 50vh;
          }
          .nomobile {
            display: none;
          }
        }
      `}</style>
    </div>
  )
}

Home.suppressFirstRenderFlicker = true
Home.getLayout = (page) => <Layout title="Andaroth">{page}</Layout>

export default Home
