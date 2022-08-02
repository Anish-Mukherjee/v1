import React from "react";
import { Link, Wrap, Center, Button } from "@chakra-ui/react";
import Profile from "./Profile";
import { useMoralisCloudFunction, useMoralis } from "react-moralis";
import { useState, useEffect } from "react";
import { Moralis } from "moralis";

//import Form from "./Form";

const Marketplace = () => {
  const { authenticate, user, isAuthenticated } = useMoralis();

  const [experts, setExperts] = useState(null);
  const { fetch } = useMoralisCloudFunction("getExperts");

  useEffect(() => {
    fetch({
      onSuccess: (data) => setExperts(data),
    });
  }, []); // eslint-disable-line react-hooks/exhaustive-deps;

  console.log(experts);

  const login = async () => {
    await authenticate();
    const user = Moralis.User.current();
    console.log(user);
  };

  const createProfile = async () => {};

  return (
    <>
      <Center>
        <Wrap>
          {experts === null ? (
            <h1>Loading...</h1>
          ) : (
            experts.map((expert, i) => (
              <Profile key={i} ethaddress={expert.attributes.ethAddress} />
            ))
          )}
        </Wrap>
      </Center>

      <Button onClick={() => login()}>Become an Expert</Button>
    </>
  );
};

export default Marketplace;
