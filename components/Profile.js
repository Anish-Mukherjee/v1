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
    Link
   
  } from '@chakra-ui/react';
  import { useMoralis } from "react-moralis";

  
  export default function Profile() {
    const { authenticate, isAuthenticated, isAuthenticating, user, account, logout } = useMoralis();
    if (isAuthenticated) {
      return (
        
      )
    }
    return (
      <Center py={6}>
        <Box
          maxW={'320px'}
          w={'full'}
          bg={useColorModeValue('white', 'gray.900')}
          boxShadow={'2xl'}
          rounded={'lg'}
          p={6}
          textAlign={'center'}>
          <Avatar
            size={'xl'}
            src={
              'https://pbs.twimg.com/profile_images/1548399412061212672/9Rq84t8a_400x400.jpg'
            }
            alt={'Avatar Alt'}
            mb={4}
            pos={'relative'}
            _after={{
              content: '""',
              w: 4,
              h: 4,
              bg: 'green.300',
              border: '2px solid white',
              rounded: 'full',
              pos: 'absolute',
              bottom: 0,
              right: 3,
            }}
          />
          <Heading fontSize={'2xl'} fontFamily={'body'}>
            mo
          </Heading>
          <Text
            textAlign={'center'}
            color={useColorModeValue('gray.700', 'gray.400')}
            px={3}>
            Creator of Confer {' '}
          </Text>
         
          <Stack align={'center'} justify={'center'} direction={'row'} mt={6}>
            <Badge
              px={2}
              py={1}
              bg={useColorModeValue('gray.50', 'gray.800')}
              fontWeight={'400'}>
            Thur. 1PM - 2PM CENTRAL
            </Badge>
            <Badge
              px={2}
              py={1}
              bg={useColorModeValue('gray.50', 'gray.800')}
              fontWeight={'400'}>
              1 ETH
            </Badge>
          </Stack>
  
          <Stack mt={8} direction={'row'} spacing={4}>
          
            <Button
              flex={1}
              fontSize={'sm'}
              rounded={'full'}
              bg={'blue.400'}
              color={'white'}
              boxShadow={
                '0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)'
              }
              _hover={{
                bg: 'blue.500',
              }}
              _focus={{
                bg: 'blue.500',
              }}>
              <Link href="https://cal.com/momin/30min" target="_blank">Book</Link>
            </Button>

            <Button onClick={()=>authenticate()}
              flex={1}
              fontSize={'sm'}
              rounded={'full'}
              bg={'yellow.400'}
              color={'white'}
              boxShadow={
                '0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)'
              }
              _hover={{
                bg: 'yellow.500',
              }}
              _focus={{
                bg: 'yellow.500',
              }}>
              Deposit
            </Button>
          </Stack>
        </Box>
      </Center>
      
    );
  }

