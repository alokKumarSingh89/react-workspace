import React from 'react';

import {
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
    <>
      <Stack spacing={6} mt="0" ml="500px">
        <Heading as="h5" size="sm" fontFamily="AkkuratMonoll">
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
          gap={6}
          p={6}
          bg="white"
        >
          <Heading as="h4" size="md" fontFamily="AkkuratMonoll">
            VEHICLE INFO
          </Heading>
          <FormControl>
            <FormLabel color="black">What does your fleet do?</FormLabel>
            <Select variant="flushed" id="country" placeholder="SELECT A ...">
              <option>United Arab Emirates</option>
              <option>Nigeria</option>
            </Select>
            <FormHelperText color="black"></FormHelperText>
          </FormControl>
          <FormControl>
            <FormLabel color="black">Number of vehicle you need?</FormLabel>
            <Select
              variant="flushed"
              id="country"
              placeholder="SELECT A QUANTITY"
            >
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
            <Input
              variant="flushed"
              size="md"
              id="vin no"
              type="text"
              placeholder="VIN NO."
            />
            <FormHelperText color="black"></FormHelperText>
          </FormControl>
          <FormControl>
            <Input
              variant="flushed"
              size="md"
              id="vin no"
              type="text"
              placeholder="VIN NO."
            />
            <FormHelperText color="black"></FormHelperText>
          </FormControl>
          <FormControl>
            <Input
              variant="flushed"
              size="md"
              id="vin no"
              type="text"
              placeholder="VIN NO."
            />
            <FormHelperText color="black"></FormHelperText>
          </FormControl>
          <FormControl>
            <Input
              variant="flushed"
              size="md"
              id="vin no"
              type="text"
              placeholder="VIN NO."
            />
            <FormHelperText color="black"></FormHelperText>
          </FormControl>
          <Stack spacing={5}>
            <Checkbox colorScheme="blackAlpha" defaultChecked>
              <Text ml="10px" mt="10px">
                I AGREE TO THE TERMS OF THE PRIVACY POLICY, WHICH I HAVE READ
                AND UNDERSTOOD.*
              </Text>
            </Checkbox>
          </Stack>
          <FormControl>
            <Heading as="h4" size="md" fontFamily="AkkuratMonoll">
              OFFICE INFO
            </Heading>
          </FormControl>
          <FormControl width={{ base: '100%', md: '48%' }}>
            <FormLabel color="black" htmlFor="firstname"></FormLabel>
            <Input
              variant="flushed"
              size="md"
              id="firstname"
              type="firstname"
              placeholder="FIRST NAME"
            />
            <FormHelperText color="black"></FormHelperText>
          </FormControl>
          <FormControl width={{ base: '100%', md: '48%' }}>
            <FormLabel color="black" htmlFor="lastname"></FormLabel>
            <Input
              variant="flushed"
              size="md"
              id="lastname"
              type="lastname"
              placeholder="LAST NAME"
            />
            <FormHelperText color="black"></FormHelperText>
          </FormControl>
          <FormControl>
            <FormLabel color="black" htmlFor="email"></FormLabel>
            <Input
              variant="flushed"
              size="md"
              id="email"
              type="email"
              placeholder="EMAIL ADDRESS"
            />
            <FormHelperText color="black"></FormHelperText>
          </FormControl>
          <FormControl>
            <FormLabel color="black" htmlFor="phone"></FormLabel>
            <Input
              variant="flushed"
              size="md"
              id="number"
              type="number"
              placeholder="PHONE"
            />
            <FormHelperText color="black"></FormHelperText>
          </FormControl>
          <FormControl>
            <FormLabel color="black" htmlFor="professional title"></FormLabel>
            <Input
              variant="flushed"
              size="md"
              id="text"
              type="text"
              placeholder="PROFESSIONAL TITLE"
            />
            <FormHelperText color="black"></FormHelperText>
          </FormControl>
          <FormControl>
            <Heading as="h4" size="md" fontFamily="AkkuratMonoll">
              COMPANY INFO
            </Heading>
          </FormControl>
          <FormControl width={{ base: '100%', md: '48%' }}>
            <FormLabel color="black" htmlFor="company name"></FormLabel>
            <Input
              variant="flushed"
              size="md"
              id="firstname"
              type="firstname"
              placeholder="COMPANY NAME"
            />
            <FormHelperText color="black"></FormHelperText>
          </FormControl>
          <FormControl width={{ base: '100%', md: '48%' }}>
            <FormLabel color="black" htmlFor="PHONE"></FormLabel>
            <Input variant='flushed' size="md" id="phone" type="number" placeholder="PHONE" />
          </FormControl>
          <FormControl>
            <FormLabel color="black" htmlFor="company address"></FormLabel>
            <Input
              variant="flushed"
              size="md"
              id="company address"
              type="text"
              placeholder="COMPANY ADDRESS"
            />
          </FormControl>
          <FormControl>
            <FormLabel color="black" htmlFor="tax id"></FormLabel>
            <Input
              variant="flushed"
              size="md"
              id="text"
              type="text"
              placeholder="TAX ID"
            />
          </FormControl>
          <Button
            type="submit"
            size="lg"
            colorScheme="blackAlpha"
            mt="24px"
            w="100%"
            bg="#222"
            flexGrow={0}
            height="80px"
          >
            Submit
          </Button>
        </Flex>
        
      </form>
    </>
  );
};

export default Fleet;
