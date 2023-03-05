import {
  Avatar,
  Box,
  Center,
  HStack,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";

export default function Testimonials() {
  return (
    <div className="testimonials-section" id="testimonials">
      <Center>
        <h1 style={{ backgroundColor: "#2EB9C4" }}>Testimonials</h1>
      </Center>
      <div className="testimonial-container">
        <Stack
          bg={useColorModeValue("gray.50", "gray.800")}
          py={10}
          px={8}
          spacing={{ base: 6, md: 10 }}
          align={"center"}
          direction={"column"}>
          <Text fontSize={{ base: "md", md: "xl" }} textAlign={"center"}>
            I am really happy and thankful for the services that is provided by
            Rupendra team and fully satisfied. will recommend other members to get
            services from My ITR team. They are always available for any support
            whenever needed.
          </Text>
          <Box textAlign={"center"}>
            <Avatar src={".images/men.png"} alt={"Abhay"} mb={2} />

            <Text fontWeight={600}>Abhay</Text>
          </Box>
        </Stack>
        <Stack
          bg={useColorModeValue("gray.50", "gray.800")}
          py={10}
          px={8}
          spacing={{ base: 8, md: 10 }}
          align={"center"}
          direction={"column"}>
          <Text
            fontSize={{ base: "md", md: "xl" }}
            textAlign={"center"}
            maxW={"3xl"}>
            Good Services by Mr. Rupendra Chaubey, the entire process of
            starting from filing the return till refund is completely smooth &
            seamless. I strongly recommend to try their services once & you
            never turned back.
          </Text>
          <Box textAlign={"center"}>
            <Avatar src={"./images/man.png"} alt={"Ankit"} mb={2} />

            <Text fontWeight={600}>Ankit</Text>
          </Box>
        </Stack>
      </div>
    </div>
  );
}
