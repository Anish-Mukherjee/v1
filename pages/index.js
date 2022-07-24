import { Flex, Tabs, Box } from "@chakra-ui/react";
import Head from "next/head";
import Marketplace from "../components/Marketplace";

export default function Home() {

  return (
    <>
    <Head>
      <title>Confer</title>
    </Head>
    <Flex direction="column" width="100vw" height="100vh">
      <Box flex="1" px="52" py="20">
        <Tabs size="lg" colorScheme="purple" align="center" variant="enclosed">
              <Marketplace />
        </Tabs>
      </Box>
    </Flex>
   </>
  )
};