import React from "react";
import { Wrap, Center, Link, HStack, Button } from "@chakra-ui/react";
import Profile from "./Profile";

const Marketplace = () => {
  return (
    <>
      <Center>
        <Wrap>
          <Profile />
        </Wrap>

        <HStack>
          <Link
            href="https://thirdweb.com/0x6E200eAAa7C1305e1C332478a0AB6cF94Bf49e01/Confer"
            target="_blank"
          >
            <Button
              flex={1}
              fontSize={"sm"}
              bg={"blue.300"}
              size={"lg"}
              boxShadow={
                "0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)"
              }
              _hover={{
                bg: "blue.500",
              }}
              _focus={{
                bg: "blue.500",
              }}
            >
              Explore Contract
            </Button>
          </Link>

          <Link href="https://airtable.com/shrTdIihBsizlSXPX" target="_blank">
            <Button
              flex={1}
              fontSize={"sm"}
              bg={"blue.300"}
              size={"lg"}
              boxShadow={
                "0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)"
              }
              _hover={{
                bg: "blue.500",
              }}
              _focus={{
                bg: "blue.500",
              }}
            >
              Become Expert
            </Button>
          </Link>
        </HStack>
      </Center>
    </>
  );
};

export default Marketplace;
