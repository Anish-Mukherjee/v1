import React from "react";
import {
  Link, Wrap, Center, Button
} from "@chakra-ui/react";
import Profile from "./Profile";

const Marketplace = () => {
  return (
    <>
    <Center>
      <Wrap>
        <Profile />
      </Wrap>
      </Center>
      <Link href="https://airtable.com/shrTdIihBsizlSXPX" target="_blank"><Button>Become an Expert</Button></Link>
    </>
  );
};

export default Marketplace;
