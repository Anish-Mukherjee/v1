import {
    Heading,
    Avatar,
    Box,
    Center,
    Text,
    Stack,
    Link,
    Badge,
    useColorModeValue,
    Button,
    Flex,
    ChakraProvider,
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
    useDisclosure, Select, Textarea
  } from '@chakra-ui/react';

  
  export default function Profile() {
    const { isOpen, onClose, onOpen } = useDisclosure();
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
              'https://imageio.forbes.com/specials-images/imageserve/5d8acdb96de3150009a5060c/0x0.jpg?format=jpg&crop=2028,2027,x1394,y380,safe&height=416&width=416&fit=bounds'
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
            Mark Cuban
          </Heading>
          <Text
            textAlign={'center'}
            color={useColorModeValue('gray.700', 'gray.400')}
            px={3}>
            Owner of Dallas Mavericks {' '}
          </Text>
         
          <Text
            textAlign={'center'}
            color={useColorModeValue('gray.700', 'gray.400')}
            px={3}
            fontSize="xs">
            - Sports Marketing {' '}
          </Text>
          <Text
            textAlign={'center'}
            color={useColorModeValue('gray.700', 'gray.400')}
            px={3}
            fontSize="xs">
            - Investing {' '}
          </Text>
          <Text
            textAlign={'center'}
            color={useColorModeValue('gray.700', 'gray.400')}
            px={3}
            fontSize="xs">
            - Entrepreneurship {' '}
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
          
            <Button onClick={onOpen}
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
              Book
            </Button>
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
                <FormLabel fontSize={"xl"}>Booking Request</FormLabel>
                <label for="msg">Message</label>
                <Textarea id="msg" height="60vh"/>
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
          </Stack>
        </Box>
      </Center>
      
    );
  }

