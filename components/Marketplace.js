import React from "react";
import { Link, Wrap, Center, Button, Heading } from "@chakra-ui/react";
import Profile from "./Profile";
import { useMoralisCloudFunction, useMoralis } from "react-moralis";
import { useState, useEffect } from "react";
import { Moralis } from "moralis";
import Form from "./Form";

const Marketplace = () => {
  const { authenticate, user, isAuthenticated, isInitialized } = useMoralis();

  const [experts, setExperts] = useState(null);
  const { fetch } = useMoralisCloudFunction(
    "getExperts",
    {},
    { autoFetch: false }
  );

  useEffect(() => {
    isInitialized &&
      fetch({
        onSuccess: (data) => setExperts(data),
      });
  }, [isInitialized]);

  return (
    <>
      <Center>
        <Wrap>
          {experts === null ? (
            <h1>Loading...</h1>
          ) : (
            experts
              .slice(1)
              .map((expert, i) => (
                <Profile key={i} ethaddress={expert.attributes.ethAddress} />
              ))
          )}
        </Wrap>
      </Center>
      <Heading>Profile:</Heading>
      <Form />
    </>
  );
};

export default Marketplace;
