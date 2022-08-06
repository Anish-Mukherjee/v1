import React, { useState } from "react";
import { Button, Link, HStack } from "@chakra-ui/react";

const Links = () => {
  const [book, displayBook] = useState(false);

  const setDisplayBook = () => {
    displayBook(true);
  };

  return (
    <div>
      <HStack>
        <Link href="https://cal.com/momin/30min" target="_blank">
          {book && (
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
              Book
            </Button>
          )}
        </Link>
        <Link href="https://calendly.com/mominkaleem/" target="_blank">
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
            Book
          </Button>
        </Link>
        <Link
          href="https://thirdweb.com/goerli/0x0577a5557C608108e13976C532Cfb6d0F0f4C4f1/"
          target="_blank"
        >
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
            onClick={setDisplayBook}
          >
            Deposit
          </Button>
        </Link>
      </HStack>
    </div>
  );
};

export default Links;
