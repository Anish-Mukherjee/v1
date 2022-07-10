import { Button, Center, Flex, Text } from "@chakra-ui/react";

export default function Header({isAuthenticated, isAuthenticating, authenticate, logout, isLoggingOut}) {
    
    return(
        <header>
            <Flex justifyContent="space-between" bg="purple.400" color="white" px={10} py={6}>
                <Center><Text fontSize="xl" fontWeight="bold">Confer</Text></Center>
                <Center>
                    {isAuthenticated ? (
                        <>
                        <Button ml={4} colorScheme="purple" onClick={logout} disabled={isLoggingOut}>Logout</Button>
                        </>
                    ) : (
                        <Button colorScheme="purple" onClick={() => authenticate({
                            signingMessage: "Sign in to Confer"
                        })} disabled={isAuthenticating}>Login</Button>
                    )}
                </Center>
            </Flex>
        </header>
    )
}