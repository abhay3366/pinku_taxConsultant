import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import {
  Flex,
  Box,
  Heading,
  Text,
  Button,
  VStack,
  WrapItem,
  Input,
  Textarea,
} from "@chakra-ui/react";
import { MdPhone, MdEmail, MdLocationOn } from "react-icons/md";

import { NavLink } from "react-router-dom";

function Contact() {
  const [state, handleSubmit] = useForm("mrgvoaby");
  if (state.succeeded) {
    alert("Thank you for getting in touch!");
  }
  return (
    <Box
      id="contact"
      padding={"2rem"}
      backgroundImage={"linear-gradient(to top, #209cff 0%, #68e0cf 100%)"}>
      <Box className="contactBox">
        <WrapItem minWidth={"25rem"} alignItems={"center"}>
          <Box>
            <Heading>Contact</Heading>
            <Text mt={{ sm: 3, md: 3, lg: 5 }} color="gray.500">
              Fill up the form below to contact
            </Text>
            <Box py={{ base: 5, sm: 5, md: 8, lg: 10 }}>
              <VStack pl={0} spacing={3} alignItems="flex-start">
                <NavLink>
                  <Flex gap={"0.5rem"}>
                    <MdPhone color="#1970F1" size="20px" />
                    <Text fontSize="18px" _hover={{ color: "brown" }}>
                      +91-9839536210
                    </Text>
                  </Flex>
                </NavLink>

                <NavLink>
                  <Flex gap={"0.5rem"}>
                    <MdEmail color="#1970F1" size="20px" />
                    <span>
                      <Text fontSize="18px" _hover={{ color: "brown" }}>
                        rupendra.chaubey@gmail.com
                      </Text>
                    </span>
                  </Flex>
                </NavLink>
                <NavLink to="https://www.google.com/maps/place/24%C2%B040'35.4%22N+83%C2%B003'20.5%22E/@24.6765,83.0535113,17z/data=!3m1!4b1!4m4!3m3!8m2!3d24.6765!4d83.0557">
                  <Flex gap={"0.5rem"}>
                    <span>{<MdLocationOn color="#1970F1" size="20px" />}</span>
                    <Text fontSize="18px" _hover={{ color: "brown" }}>
                      Barauli,Robertsganj,
                      <br /> Uttar Pradesh,231216
                    </Text>
                  </Flex>
                </NavLink>
              </VStack>
            </Box>
          </Box>
        </WrapItem>
        <WrapItem bg={"white"} padding={"1.5rem"}>
          <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name</label>
            <Input id="name" type="text" name="username" />

            <ValidationError prefix="Name" field="text" errors={state.errors} />
            <label htmlFor="email">Email Address</label>
            <Input id="email" type="email" name="email" />

            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
            <label htmlFor="message">Message</label>
            <Textarea id="message" name="message" />

            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />

            <Button
              colorScheme="cyan"
              type="submit"
              disabled={state.submitting}
              mt={"1rem"}>
              Submit
            </Button>
          </form>
        </WrapItem>
      </Box>
    </Box>
  );
}
export default Contact;
