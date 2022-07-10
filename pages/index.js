import { Flex, Text, Button, Tabs, Box } from "@chakra-ui/react";
import Head from "next/head";
import { useMoralis } from "react-moralis";
import Header from "../components/Header";
import Marketplace from "../components/Marketplace";

export default function Home() {
  const {isAuthenticated, user, isAuthenticating, authenticate, logout, isLoggingOut} = useMoralis()
  if (!isAuthenticated) {
    return (
      <>
        <Head>
          <title>Confer Login</title>
        </Head>
        <Flex direction="column" justifyContent="center" alignItems="center" width="100vw" height="100vh" bgGradient="linear(to-br, teal.400, purple.300)">
          <Text fontSize="5xl" fontWeight="bold" color="white">Confer</Text>
          <Text fontSize="3xl" fontWeight="bold" color="teal">Meet with world class talent using smart contracts</Text>
          <Button colorScheme="purple" size="lg" mt="6" onClick={() => authenticate({
            signingMessage: "Sign in required to access marketplace"
          })} disabled={isAuthenticating}>Login with Metamask</Button>
        </Flex>
      </>
    )
  }
  return (
    <>
    <Head>
      <title>Confer</title>
    </Head>
    <Flex direction="column" width="100vw" height="100vh">
      <Header isAuthenticated={isAuthenticated} isAuthenticating={isAuthenticating} user={user} authenticate={authenticate} logout={logout} isLoggingOut={isLoggingOut} />
      <Box flex="1" bg="purple.100" px="52" py="20">
        <Tabs size="lg" colorScheme="purple" align="center" variant="enclosed">
              <Marketplace />
        </Tabs>
      </Box>
    </Flex>
   </>
  )
};