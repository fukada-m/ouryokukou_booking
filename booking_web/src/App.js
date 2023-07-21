import { RecoilRoot } from 'recoil';
import { ChakraProvider } from "@chakra-ui/react"

import { Router } from './router/Router';
import { Header } from './components/Header';
import theme from './theme/theme';


function App() {

  return (
    <>
      <h1>Booking Web</h1>
      <Header />
      <RecoilRoot>
        <ChakraProvider theme={theme}>
          <Router />
        </ChakraProvider>
      </RecoilRoot>
    </>
  );
}

export default App;
