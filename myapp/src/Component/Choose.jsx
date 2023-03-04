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
} from "@chakra-ui/react";
import { AiOutlineCheckCircle } from "react-icons/ai";

const Choose = () => {
  return (
    <>
      <div className="choose-container">
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
            <CardBody pr={9}>
              <Heading size="sm" bg={"orange "} display={"inline-block"}>
                Why Choose Us
              </Heading>

              <Text py="9" fontSize="4xl">
                We <span style={{backgroundColor:"orange"}}> Experienced In Tax Preparation</span>, Business And
                Financial Services.
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
