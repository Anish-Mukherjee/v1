import React from "react";
import { Link, Wrap, Center, Button } from "@chakra-ui/react";
import Profile from "./Profile";
import { useMoralisCloudFunction, useMoralis } from "react-moralis";
import { useState, useEffect } from "react";
//import Form from "./Form";

const Marketplace = () => {
  const [experts, setExperts] = useState(null);
  const { authenticate, user, isAuthenticated } = useMoralis();

  const { fetch } = useMoralisCloudFunction("getExperts");

  useEffect(() => {
    fetch({
      onSuccess: (data) => setExperts(data),
    });
  });

  return (
    <>
      <Center>
        <Wrap>
          {experts === null ? (
            <h1>Loading...</h1>
          ) : (
            experts.map((expert, i) => (
              <Profile key={i} ethaddress={expert.id} />
            ))
          )}
        </Wrap>
      </Center>

      <Button onClick={() => authenticate()}>Become an Expert</Button>
    </>
  );
};

export default Marketplace;
