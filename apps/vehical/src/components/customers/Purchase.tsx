import React from 'react';

import {
  FormControl,
  FormErrorMessage,
  Checkbox,
  Text,
  Heading,
  ListItem,
  UnorderedList,
  Container,
  Stack,
  VStack,
  Button,
  Box,
  FormHelperText,
  Flex,
} from '@chakra-ui/react';

export const CustomerType = {
  Commercial:'Commercial',
  Fleet:'Fleet',
}

const Purchase = ({custmerType}) => {
  return (
    <>
      <Stack spacing={6} mt="5" ml="254px" letterSpacing="0.5px">
        <Heading as="h4" size="md">
          WE ARE EXCITED TO CONNECT
          <br /> WITH YOU !
        </Heading>
      </Stack>
      <Container maxW="700px" bg="white">
        <Flex mx="auto" mt={10} flexWrap="wrap" p={4}>
          <FormControl mb={5}>
            <Heading as="h5" size="sm" fontFamily="AkkuratMonoll">
              SIZE OF PURCHASE
            </Heading>
          </FormControl>
          <Box
            w="390px"
            h="300px"
            border="1px solid #888"
            width={{ base: '100%', md: '48%' }}
          >
            <VStack
              spacing={0}
              align="flex-start"
              p={4}
              fontFamily="AkkuratMonoll"
            >
              <Heading as="h4" size="md">
                {'< 5'}
              </Heading>
              <Text as="h3" size="lg" color="#888">
                COMMERCIAL
              </Text>
            </VStack>
            <Stack
              color="#888"
              fontFamily="AkkuratMonoll"
              p={4}
              fontStyle="normal"
              letterSpacing="normal"
            >
              <UnorderedList>
                <ListItem>Basic customization</ListItem>
                <ListItem>Bulk Discount</ListItem>
              </UnorderedList>
            </Stack>
            <Stack spacing={5} mt="80px" p={4}>
              <Checkbox colorScheme="blackAlpha" checked={custmerType === CustomerType.Commercial}></Checkbox>
            </Stack>
          </Box>
          <Box
            w="390px"
            h="300px"
            ml="25px"
            border="1px solid #888"
            width={{ base: '100%', md: '48%' }}
          >
            <VStack
              spacing={0}
              align="flex-start"
              p={4}
              fontFamily="AkkuratMonoll"
            >
              <Heading as="h4" size="md">
                {'5+'}
              </Heading>
              <Text as="h3" size="lg" color="#888">
                Fleet
              </Text>
            </VStack>
            <Stack
              color="#888"
              fontFamily="AkkuratMonoll"
              p={4}
              fontStyle="normal"
              letterSpacing="normal"
            >
              <UnorderedList>
                <ListItem>Exculsive customization</ListItem>
                <ListItem>fleet solution support</ListItem>
              </UnorderedList>
            </Stack>
            <Stack spacing={5} mt="80px" p={4}>
              <Checkbox colorScheme="blackAlpha" checked={custmerType === CustomerType.Fleet}></Checkbox>
            </Stack>
          </Box>
          <Stack w="full">
            <Button
              type="submit"
              size="lg"
              colorScheme="blackAlpha"
              mt="24px"
              w="100%"
              bg="#222"
              flexGrow={0}
              height="50px"
            >
              Submit
            </Button>
          </Stack>
        </Flex>
      </Container>
    </>
  );
};

export default Purchase;
