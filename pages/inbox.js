import React from 'react'
import { Button, ButtonGroup, Box, Text, Heading} from '@chakra-ui/react'

const inbox = () => {
    
  return (
    <>
    <Heading>Inbox Notifications</Heading>
    <Box bg='tomato' p={4} color='white'>
    <Text>Incoming Meeting Request</Text>
    <Text>Hi Mark, I would like to meet with you to discuss how to get my customer acquisition cost down for my tshirt company</Text>
   <Text> Thanks, Jerry</Text>
    </Box>
    <ButtonGroup margin="50">
    <Button>Reject</Button>
    <Button>Accept and Deploy Contract</Button>
    </ButtonGroup>
    <Box bg='teal' p={4} color='white'>
    <Text>Incoming Meeting Request</Text>
    <Text>ay fuck mcuban n shit</Text>
    </Box>
    <ButtonGroup margin="50">
    <Button>Reject</Button>
    <Button>Accept and Deploy Contract</Button>
    </ButtonGroup>
   
    <Box bg='pink' p={4} color='white' height="100px">
    <Text>Incoming Meeting Request</Text>
    </Box>
    <ButtonGroup margin="50">
    <Button>Reject</Button>
    <Button>Accept and Deploy Contract</Button>
    </ButtonGroup>
   </>
  )
}

export default inbox

