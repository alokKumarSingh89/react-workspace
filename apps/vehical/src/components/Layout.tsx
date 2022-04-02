import { ChakraProvider, Box } from '@chakra-ui/react';

const Layout = ({ children }) => {
  return (
    <ChakraProvider>
      <Box width={'100%'} bg="blackAlpha.50" m="0" p="0">{children}</Box>
    </ChakraProvider>
  );
};

export default Layout;
