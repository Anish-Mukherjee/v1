import React from "react";
import { Wrap, Center, Link } from "@chakra-ui/react";
import Profile from "./Profile";

const Marketplace = () => {
  return (
    <>
      <Center>
        <Wrap>
          <Profile />
        </Wrap>
      </Center>
      <Link href="https://airtable.com/shrTdIihBsizlSXPX" target="_blank">
        Become Expert
      </Link>
    </>
  );
};

export default Marketplace;
