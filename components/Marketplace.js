import React from "react";
import { Wrap, Center, Button } from "@chakra-ui/react";
import Profile from "./Profile";
import { useMoralisCloudFunction, useMoralis } from "react-moralis";
import { useState, useEffect } from "react";

const Marketplace = () => {
  const { isInitialized, authenticate } = useMoralis();

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
          <Button onClick={authenticate}>Sign Up</Button>
        </Wrap>
      </Center>
    </>
  );
};

export default Marketplace;
