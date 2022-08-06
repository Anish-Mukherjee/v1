import {
  Flex,
  Tabs,
  Box,
  Button,
  Center,
  HStack,
  Heading,
} from "@chakra-ui/react";
import Head from "next/head";
import { useState, useEffect } from "react";
import Marketplace from "../components/Marketplace";

import abi from "../utils/Confer.json";

import { useSDK } from "@thirdweb-dev/react";

export default function Home() {
  const contractABI = abi.abi;
  const contractAddress = "0xF710Ff459abdc9eB01d763Fd099200F0A93a4E24";
  const [balance, setBalance] = useState(0);
  const [currentAccount, setCurrentAccount] = useState("");
  const [loading, isLoading] = useState(false);

  const sdk = useSDK();

  const checkIfWalletIsConnected = async () => {
    try {
      const { ethereum } = window;
      if (!ethereum) {
        console.log("Make sure you have Metamask!");
      } else {
        console.log("We have the ethereum object", ethereum);
      }
    } catch (err) {
      console.error(err);
    }
  };

  const connectWallet = async () => {
    try {
      const { ethereum } = window;
      if (!ethereum) {
        alert("Get Metamask!");
        return;
      }
      const accounts = await ethereum.request({
        method: "eth_requestAccounts",
      });
      console.log("Connected", accounts[0]);
      setCurrentAccount(accounts[0]);
    } catch (err) {
      console.error(err);
    }
  };

  const getContractBalance = async () => {
    /*const { ethereum } = window;
    try {
      if (ethereum) {
        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();
        const conferContract = new ethers.Contract(
          contractAddress,
          contractABI,
          signer
        );
        const balance = await conferContract.getBalance();
        setBalance(balance);
      } else {
        console.log("Ethereum object doesn't exist!");
      }
    } catch (err) {
      console.error(err);
    }*/
    isLoading(true);
    const contract = await sdk.getContract(
      "0xF710Ff459abdc9eB01d763Fd099200F0A93a4E24" //change contract address here
    );
    const balance = await contract.call("getContractBalance");
    setBalance(balance.toNumber());
    isLoading(false);
  };

  /*const deposit = async () => {
    const { ethereum } = window;
    try {
      if (ethereum) {
        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();
        const conferContract = new ethers.Contract(
          contractAddress,
          contractABI,
          signer
        );
        console.log("We have the ethereum object and contractq");
      } else {
        console.log("Ethereum object doesn't exist!");
      }
    } catch (err) {
      console.error(err);
    }
  };*/

  useEffect(() => {
    checkIfWalletIsConnected();
  }, []);

  return (
    <>
      <Head>
        <title>Confer</title>
      </Head>
      <Center>
        <HStack>
          <Button
            align="center"
            fontSize={"sm"}
            bg={"blue.300"}
            size={"lg"}
            m={1}
            boxShadow={
              "0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)"
            }
            _hover={{
              bg: "blue.500",
            }}
            _focus={{
              bg: "blue.500",
            }}
            onClick={getContractBalance}
          >
            {loading ? <p>Loading</p> : <p>Update contract balance</p>}
          </Button>
          {!currentAccount && (
            <Center>
              <Button
                align="center"
                fontSize={"sm"}
                bg={"blue.300"}
                size={"lg"}
                boxShadow={
                  "0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)"
                }
                _hover={{
                  bg: "blue.500",
                }}
                _focus={{
                  bg: "blue.500",
                }}
                onClick={connectWallet}
              >
                Connect your wallet
              </Button>
            </Center>
          )}
        </HStack>
      </Center>
      <Heading fontSize={"2xl"} fontFamily={"body"} align="center">
        Contract Balance : {balance}
      </Heading>

      {/*<Flex direction="column" width="100vw" height="80vh">
        {/*<button align="center" onClick={deposit}>
          Click to deposit
        </button>
        <Box flex="1" px="52" py="20">
          <Tabs
            size="lg"
            colorScheme="purple"
            align="center"
            variant="enclosed"
          />
        </Box>
      <div
        style={{
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundImage: `url(https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Z3JhZGllbnR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60)`,
        }}
      >*/}
      <Flex direction="column" width="100vw" height="80vh">
        <Box flex="1" px="52" py="20">
          <Marketplace />
        </Box>
      </Flex>
    </>
  );
}
