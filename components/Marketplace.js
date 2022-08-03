import React from "react";
import { Wrap, Center } from "@chakra-ui/react";
import Profile from "./Profile";
import { useMoralisCloudFunction, useMoralis } from "react-moralis";
import { useState, useEffect } from "react";

const Marketplace = () => {
  const { isInitialized } = useMoralis();

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
    </>
  );
};

export default Marketplace;
