import React from "react";
import {
  Link, Wrap, Center, Button
} from "@chakra-ui/react";
import Profile from "./Profile";
import { useMoralisCloudFunction } from "react-moralis";

const Marketplace = () => {
  const { fetch } = useMoralisCloudFunction(
    "getExperts"
  );
  const cloudCall = () => {
    fetch({
      onSuccess: (data) => console.log(data), // ratings should be 4.5
    });
  };

  return (
    <>
    <Center>
      <Wrap>
        <Profile />
      </Wrap>
      </Center>
      <Button onClick={()=>cloudCall()}>Make Cloud Call</Button>
      <Link href="https://airtable.com/shrTdIihBsizlSXPX" target="_blank"><Button>Become an Expert</Button></Link>
    </>
  );
};

export default Marketplace;
