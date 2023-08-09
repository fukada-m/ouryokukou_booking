import { RecoilRoot } from 'recoil';
import { ChakraProvider } from "@chakra-ui/react"

import { Router } from './router/Router';
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
