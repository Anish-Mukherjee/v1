import React from "react";
import {
  Flex,
} from "@chakra-ui/react";
import Profile from "./Profile";

const Marketplace = () => {
  return (
    <>
      <Flex justifyContent="space-around">
        <Profile />
      </Flex>
    </>
  );
};

export default Marketplace;
