import React from "react";
import {
  Flex, Link
} from "@chakra-ui/react";
import Profile from "./Profile";

const Marketplace = () => {
  return (
    <>
      <Flex justifyContent="space-around">
        <Profile />
        <Link href="https://airtable.com/shrTdIihBsizlSXPX" target="_blank">Become an expert</Link>
      </Flex>
    </>
  );
};

export default Marketplace;
