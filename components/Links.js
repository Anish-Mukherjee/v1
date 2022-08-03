import React from "react";
import { Button, Link, HStack } from "@chakra-ui/react";

const Links = () => {
  return (
    <HStack>
      <Button
        flex={1}
        fontSize={"sm"}
        rounded={"full"}
        bg={"blue.300"}
        color={"white"}
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
        <Link href="https://cal.com/momin/30min" target="_blank">
          Book
        </Link>
      </Button>

      <Button
        flex={1}
        fontSize={"sm"}
        rounded={"full"}
        bg={"yellow.400"}
        color={"white"}
        padding={"4"}
        boxShadow={
          "0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)"
        }
        _hover={{
          bg: "yellow.500",
        }}
        _focus={{
          bg: "yellow.500",
        }}
      >
        <Link
          href="https://thirdweb.com/polygon/0xe383201858f5AF02Fc04b2d7A4fB2e3489da978B/"
          target="_blank"
        >
          Deposit
        </Link>
      </Button>
    </HStack>
  );
};

export default Links;
