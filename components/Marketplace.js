import React from "react";
import {
  Button,
  Flex,
  Text,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  FormControl,
  FormLabel,
  FormHelperText,
  Input,
  ModalFooter,
  useDisclosure, Select
} from "@chakra-ui/react"
import Profile from "./Profile";


const Marketplace = () => {
  const { isOpen, onClose, onOpen } = useDisclosure();
  return (
    <>
      <Text fontSize="xl">Marketplace</Text>
      <Flex justifyContent="space-around">
        <Profile />
        <Profile />
        <Profile />
      </Flex>
      <Button onClick={onOpen}> Become an Expert </Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            <ModalCloseButton />
          </ModalHeader>

          <ModalBody>
            <form
              id="new-note"
              onSubmit={(event) => {
                event.preventDefault();
                alert("Submitted");
              }}
            >
              <FormControl>
                <FormLabel fontSize={"xl"}>Become an expert</FormLabel>
                <label >Name</label>
                <Input type="text" placeholder="Vitalik Buterin" id="name" />
                <label >Skills</label>
                <Input
                  type="text"
                  placeholder="Solidity, C, Assembly, Python..."
                  id="skills"
                />
                <label >Wallet Address</label>
                <Input
                  type="text"
                  placeholder="0x...."
                  id="wallet"
                />
                <label>Rate</label>
                <Input type="number" placeholder="1 ETH Per Hour" id="rate" />
                <label  marginTop={'10px'}>Time Zone</label>
                <Select placeholder='Select option' marginTop={'10px'} id="timezone">
  <option value='option1'>EST</option>
  <option value='option2'>CT</option>
  <option value='option3'>PT</option>
</Select>
                
                <label>Profile Picture</label>
                <Input
                  type="image"
                  id="pfp"
                />
                <FormHelperText>
                  We keep your account data secure
                </FormHelperText>
              </FormControl>
            </form>
          </ModalBody>

          <ModalFooter>
            <Button type="submit" form="new-note">
              Submit
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default Marketplace;
