import { ChakraProvider, Box, Heading, Button } from '@chakra-ui/react';

function App() {
  return (
    <ChakraProvider>
      <Box p={4}>
        <Heading size="lg" mb={4}>
          Welcome to Chakra UI
        </Heading>
        <Button colorScheme="teal">Click me!</Button>
      </Box>
    </ChakraProvider>
  );
}

export default App;
