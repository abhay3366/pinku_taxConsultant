import {
  Text,
  Input,
  Stack,
  Button,
  InputGroup,
  Center,
} from "@chakra-ui/react";
import React from "react";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillTwitterSquare,
} from "react-icons/ai";
import { NavLink } from "react-router-dom";
const Footer = () => {
  return (
    <>
      <div className="footer-section">
        <div className="footer-container">
          <div className="footer-box1">
            <img src="#" alt="" />
            <h2>
              @ 2023 abhya kant tiwari. All right <br /> reserved
            </h2>
            <div className="footer-icons">
              <NavLink to="#">
                <AiFillFacebook />
              </NavLink>
              <NavLink to="#">
                <AiFillInstagram />
              </NavLink>
              <NavLink to="#">
                <AiFillTwitterSquare />
              </NavLink>
            </div>
          </div>
          <div className="footer-box2">
            <h1>RUPENDRA CHAUBEY & COMPANY</h1>
            <div>
              <NavLink to="#">
                <Text>About Us</Text>
              </NavLink>
              <NavLink to="#">
                <Text>Our Services</Text>
              </NavLink>
              <NavLink to="#">
                <Text>Testimonial</Text>
              </NavLink>
              <NavLink to="#">
                <Text>Contact Us</Text>
              </NavLink>
            </div>
          </div>
          <div className="footer-box3">
            <h1>Support</h1>
            <div>
              <NavLink to="#">
                <Text>About Us</Text>
              </NavLink>
              <NavLink to="#">
                <Text>Our Services</Text>
              </NavLink>
              <NavLink to="#">
                <Text>Testimonial</Text>
              </NavLink>
              <NavLink to="#">
                <Text>Contact Us</Text>
              </NavLink>
            </div>
          </div>
          <div className="footer-box4">
            <h1>Stay Up To Date</h1>
            <Stack spacing={4}>
              <InputGroup size="sm">
                <Input placeholder="Email" w={300}  />
                <Button color={"orange.500"}>Submit</Button>
              </InputGroup>
            </Stack>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
