import { RecoilRoot } from 'recoil';
import { ChakraProvider } from "@chakra-ui/react"

import { Router } from './router/Router';
import { Header } from './components/organisms/layout/Header';
import theme from './theme/theme';


function App() {

  return (
    <>
      <RecoilRoot>
        <ChakraProvider theme={theme}>
          <Router />
        </ChakraProvider>
      </RecoilRoot>
    </>
  );
}

export default App;
