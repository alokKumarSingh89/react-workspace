import React from 'react';

import {
  ChakraProvider,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Heading,
  Text,
  Stack,
  Checkbox,
  Input,
  Select,
  Box,
  Button,
  FormHelperText,
  Flex,
} from '@chakra-ui/react';

const Fleet = () => {
  return (
    <ChakraProvider>
      <Stack spacing={6} mt="5" ml="500px">
        <Heading as="h2" size="xl">
          FLEET
        </Heading>
      </Stack>
      <form>
        <Flex
          direction="row"
          maxW="700px"
          mx="auto"
          mt={20}
          flexWrap="wrap"
          gap={4}
          p={4}
        >
          <Heading as="h3" size="lg">
            VEHICLE INFO
          </Heading>
          <FormControl>
            <FormLabel color="black">What does your fleet do?</FormLabel>
            <Select id="country" placeholder="SELECT A ...">
              <option>United Arab Emirates</option>
              <option>Nigeria</option>
            </Select>
            <FormHelperText color="black"></FormHelperText>
          </FormControl>
          <FormControl>
            <FormLabel color="black">Number of vehicle you need?</FormLabel>
            <Select id="country" placeholder="SELECT A QUANTITY">
              <option>SELECT B QUANTITY</option>
              <option>SELECT C QUANTITY</option>
            </Select>
            <FormHelperText color="black"></FormHelperText>
          </FormControl>
          <FormControl>
            <FormLabel color="black" htmlFor="contact">
              Do you have your own service facility?
            </FormLabel>
            <Stack spacing={5}>
              <Checkbox colorScheme="blackAlpha" defaultChecked>
                YES
              </Checkbox>
              <Checkbox colorScheme="blackAlpha" defaultChecked>
                NO
              </Checkbox>
            </Stack>
          </FormControl>
          <FormControl>
            <FormLabel color="black" htmlFor="contact">
              Do you use a Fleet Management Company?
            </FormLabel>
            <Stack spacing={5}>
              <Checkbox colorScheme="blackAlpha" defaultChecked>
                YES
              </Checkbox>
              <Checkbox colorScheme="blackAlpha" defaultChecked>
                NO
              </Checkbox>
            </Stack>
          </FormControl>
          <FormControl>
            <FormLabel color="black">VIN REGISTRATION (minimum 3)</FormLabel>
            <Stack>
              <Button color="black" variant="link" ml="610px" mb="30px">
                ADD
              </Button>
            </Stack>
            <Input size="md" id="vin no" type="text" placeholder="VIN NO." />
            <FormHelperText color="black"></FormHelperText>
          </FormControl>
          <FormControl>
            <Input size="md" id="vin no" type="text" placeholder="VIN NO." />
            <FormHelperText color="black"></FormHelperText>
          </FormControl>
          <FormControl>
            <Input size="md" id="vin no" type="text" placeholder="VIN NO." />
            <FormHelperText color="black"></FormHelperText>
          </FormControl>
          <FormControl>
            <Input size="md" id="vin no" type="text" placeholder="VIN NO." />
            <FormHelperText color="black"></FormHelperText>
          </FormControl>
          <Stack spacing={5}>
            <Checkbox colorScheme="blackAlpha" defaultChecked>
              <Text ml="10px" mt="10px">
                {' '}
                I AGREE TO THE TERMS OF THE PRIVACY POLICY, WHICH I HAVE READ
                AND <br />
                UNDERSTOOD.*
              </Text>
            </Checkbox>
          </Stack>
          <Heading as="h3" size="lg">
            OFFICE INFO
          </Heading>
          <FormControl width={{ base: '100%', md: '48%' }}>
            <FormLabel color="black" htmlFor="firstname"></FormLabel>
            <Input size="md" id="firstname" type="firstname"  placeholder='FIRST NAME'/>
            <FormHelperText color="black"></FormHelperText>
          </FormControl>
          <FormControl width={{ base: '100%', md: '48%' }}>
            <FormLabel color="black" htmlFor="lastname"></FormLabel>
            <Input size="md" id="lastname" type="lastname" placeholder='LAST NAME' />
            <FormHelperText color="black"></FormHelperText>
          </FormControl>
          <FormControl>
            <FormLabel color="black" htmlFor="email"></FormLabel>
            <Input size="md" id="email" type="email"  placeholder='EMAIL ADDRESS'/>
            <FormHelperText color="black"></FormHelperText>
          </FormControl>
          <FormControl>
            <FormLabel color="black" htmlFor="phone"></FormLabel>
            <Input size="md" id="number" type="number" placeholder='PHONE' />
            <FormHelperText color="black"></FormHelperText>
          </FormControl>
          <FormControl>
            <FormLabel color="black" htmlFor="professional title"></FormLabel>
            <Input size="md" id="text" type="text"  placeholder='PROFESSIONAL TITLE'/>
            <FormHelperText color="black"></FormHelperText>
          </FormControl>
          <Button
            type="submit"
            size="lg"
            colorScheme="blackAlpha"
            mt="24px"
            w="100%"
          >
            Submit
          </Button>
        </Flex>
      </form>
    </ChakraProvider>
  );
};

export default Fleet;
