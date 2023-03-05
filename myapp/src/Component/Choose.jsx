import React from "react";
import {
  Card,
  Stack,
  Heading,
  Text,
  CardBody,
  CardFooter,
  Button,
  Image,
  Box,
  Center,
} from "@chakra-ui/react";
import { AiOutlineCheckCircle } from "react-icons/ai";

const Choose = () => {
  return (
    <>
      <div className="choose-container" id="about">
        <Card
          className="choose-section"
          direction={{ base: "column", sm: "row" }}
          overflow="hidden">
          <Image
            objectFit="cover"
            width="70%"
            src="./images/choose.jpg"
            alt="Caffe Latte"
            m={"auto"}
          />

          <Stack>
            <CardBody pr={{ base: "9", md: "", lg: "56px" }}>
              <Center>
                <Heading
                  size="sm"
                  bg={"#2EB9C4 "}
                  display={"inline-block"}
                  p={4}
                  className="choose-heading">
                  Why Choose Us
                </Heading>
              </Center>

              <Text
                py="9"
                // fontSize="4xl"
                fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }}>
                We
                <span style={{ backgroundColor: "#2EB9C4" }}>
                  Experienced In Tax Preparation
                </span>
                , Business And Financial Services.
              </Text>
              <Text>
                We bring years of expertise and proficiency in tax preparation,
                business, and financial services. Our team is equipped to
                deliver comprehensive solutions tailored to your unique needs
                and requirements.
              </Text>
              <Box paddingTop={{ sm: "8" }}>
                <table className="icon-table">
                  <tr>
                    <td>
                      <AiOutlineCheckCircle className="tick-icon" />
                      <span> IRS Tax Problems</span>
                    </td>
                    <td>
                      {" "}
                      <AiOutlineCheckCircle className="tick-icon" />
                      <span> Tax Prepration and Planning</span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <AiOutlineCheckCircle className="tick-icon" />
                      <span> Payroll Services</span>
                    </td>
                    <td>
                      <AiOutlineCheckCircle className="tick-icon" />
                      <span> Bookkeeping and Virtual CFO</span>
                    </td>
                  </tr>
                </table>
              </Box>
            </CardBody>
          </Stack>
        </Card>
      </div>
    </>
  );
};

export default Choose;
