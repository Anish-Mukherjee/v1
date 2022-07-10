import { MoralisProvider } from "react-moralis";
import "../styles/globals.css";
import { ChakraProvider } from '@chakra-ui/react'

function MyApp({ Component, pageProps }) {
  return (
    <MoralisProvider
      appId={process.env.NEXT_PUBLIC_APP_ID}
      serverUrl={process.env.NEXT_PUBLIC_SERVER_URL}
    >
      <ChakraProvider>
      <Component {...pageProps} />
      {console.log('Found Moralis')}
      </ChakraProvider>
    </MoralisProvider>
  );
}

export default MyApp;