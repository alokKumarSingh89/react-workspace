import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import {
  
  FormControl,
  FormErrorMessage,
  Checkbox,
  Text,
  Heading,
  Stack,
  Input,
  Button,
  FormHelperText,
  Flex,
} from '@chakra-ui/react';

type Inputs = {
  firstname: string;
  lastname: string;
  contact: number;
  email: string;
  password: number;
  confirmPassword: number;
};

function ChakraUiForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);
  console.log('Errors', errors);

  return (
    <>
      <Stack spacing={6} mt="5" ml="254px" letterSpacing="0.5px">
        <Heading as="h4" size="md">
          COMMERCIAL
        </Heading>
      </Stack>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Flex
          direction="row"
          maxW="700px"
          mx="auto"
          mt={10}
          flexWrap="wrap"
          gap={6}
          p={6}
          bg="white"
        >
          <FormControl>
            <Heading as="h5" size="sm" fontFamily="AkkuratMonoll">
              BASIC INFO
            </Heading>
          </FormControl>
          <FormControl width={{ base: '100%', md: '48%' }}>
            <Input
              variant="flushed"
              size="md"
              id="firstname"
              type="firstname"
              placeholder="First Name"
              {...register('firstname', { required: true, maxLength: 20 })}
            />
          </FormControl>
          <FormControl width={{ base: '100%', md: '48%' }}>
            <Input
              variant="flushed"
              size="md"
              id="lastname"
              type="lastname"
              placeholder="Last Name"
              {...register('lastname', {
                required: true,
                pattern: /^[A-Za-z]+$/i,
              })}
            />
          </FormControl>
          <FormControl>
            <Input
              variant="flushed"
              size="md"
              id="email"
              type="text"
              placeholder="Email Address"
              {...register('lastname', {
                required: true,
                pattern: /^[A-Za-z]+$/i,
              })}
            />
          </FormControl>
          <FormControl width={{ base: '100%', md: '48%' }}>
            <Input
              variant="flushed"
              size="md"
              id="company name"
              type="text"
              placeholder="Company Name"
              {...register('firstname', { required: true, maxLength: 20 })}
            />
          </FormControl>
          <FormControl width={{ base: '100%', md: '48%' }}>
            <Input
              variant="flushed"
              size="md"
              id="phone number"
              type="number"
              placeholder="Phone Number"
              {...register('lastname', {
                required: true,
                pattern: /^[A-Za-z]+$/i,
              })}
            />
          </FormControl>
          <FormControl>
            <Input
              variant="flushed"
              size="md"
              id="address"
              type="text"
              placeholder="Address"
              {...register('lastname', {
                required: true,
                pattern: /^[A-Za-z]+$/i,
              })}
            />
          </FormControl>
          <FormControl>
            <Input
              variant="flushed"
              size="md"
              id="estimated"
              type="text"
              placeholder="Estimated Quantity"
              {...register('lastname', {
                required: true,
                pattern: /^[A-Za-z]+$/i,
              })}
            />
          </FormControl>
          <Stack spacing={5}>
            <Checkbox colorScheme="blackAlpha" defaultChecked>
              <Text ml="10px" mt="10px">
                I AGREE TO THE TERMS OF THE PRIVACY POLICY, WHICH I HAVE READ
                AND UNDERSTOOD.*
              </Text>
            </Checkbox>
          </Stack>
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
}

export default ChakraUiForm;
