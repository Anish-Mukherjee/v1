import {
  Heading,
  Avatar,
  Box,
  Center,
  Text,
  Stack,
  Badge,
  useColorModeValue,
  Button,
  Link,
} from "@chakra-ui/react";
import Links from "./Links";

export default function Profile() {
  return (
    <Center py={6}>
      <Box
        maxW={"320px"}
        w={"full"}
        bg={useColorModeValue("purple.100", "gray.900")}
        rounded={"lg"}
        p={6}
        textAlign={"center"}
        margin={"2"}
      >
        <Avatar
          size={"xl"}
          alt={"Avatar Alt"}
          mb={4}
          pos={"relative"}
          src="https://pbs.twimg.com/profile_images/1548399412061212672/9Rq84t8a_400x400.jpg"
        />
        <Heading fontSize={"2xl"} fontFamily={"body"}>
          mo
        </Heading>
        <Text
          textAlign={"center"}
          color={useColorModeValue("gray.700", "gray.400")}
          px={3}
        >
          Creator of Confer
        </Text>

        <Stack align={"center"} justify={"center"} direction={"row"} mt={6}>
          <Badge
            px={2}
            py={1}
            bg={useColorModeValue("gray.50", "gray.800")}
            fontWeight={"400"}
          >
            1 ETH
          </Badge>
        </Stack>
       
        <Stack mt={8} direction={"row"} spacing={4}> 
        <Links margin={"15"}/>
        </Stack>
      </Box>
    
    </Center>
  );
}
