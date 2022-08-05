import { Flex, Tabs, Box } from "@chakra-ui/react";
import Head from "next/head";
import Marketplace from "../components/Marketplace";

export default function Home() {
  return (
    <>
      <Head>
        <title>Confer</title>
      </Head>
      <div
        style={{
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundImage: `url(https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Z3JhZGllbnR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60)`,
        }}
      >
        <Flex direction="column" width="100vw" height="100vh">
          <Box flex="1" px="52" py="20">
            <Marketplace />
          </Box>
        </Flex>
      </div>
    </>
  );
}
