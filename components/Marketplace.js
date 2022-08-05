import React from "react";
import { Wrap, Center, Link, VStack } from "@chakra-ui/react";
import Profile from "./Profile";

const Marketplace = () => {
  return (
    <>
      <Center>
        <Wrap>
          <Profile />
        </Wrap>
      </Center>
      <VStack>
        <Link
          href="https://thirdweb.com/0x6E200eAAa7C1305e1C332478a0AB6cF94Bf49e01/Confer"
          target="_blank"
          color="purple.500"
        >
          Explore Contract
        </Link>
        <Link
          href="https://airtable.com/shrTdIihBsizlSXPX"
          target="_blank"
          color="teal.500"
        >
          Become Expert
        </Link>
      </VStack>
    </>
  );
};

export default Marketplace;
