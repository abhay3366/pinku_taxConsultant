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
import { Link } from "react-scroll";
const Footer = () => {
  return (
    <>
      <div className="footer-section">
        <div className="footer-container">
          <div className="mobile-footer">
            <p>&copy; 2023 Copyright :Rupendra Chaubey & Company.</p>
          </div>
          <div className="footer-box1">
            <img src="./images/4.png" alt="logo" className="desktop-logo" />
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
              <Link
                to="about"
                spy={true}
                smooth={true}
                offset={50}
                className="navlink"
                duration={500}>
                <Text>About Us</Text>
              </Link>
              <Link
                to="services"
                spy={true}
                smooth={true}
                offset={50}
                className="navlink"
                duration={500}>
                <Text>Our Services</Text>
              </Link>
              <Link
                to="testimonials"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
                className="navlink">
                <Text>Testimonial</Text>
              </Link>
              <Link
                to="contact"
                spy={true}
                smooth={true}
                offset={50}
                className="navlink"
                duration={500}>
                <Text>Contact Us</Text>
              </Link>
            </div>
          </div>
          <div className="footer-box3">
            <h1>Opening Hours</h1>
            <div className="opening-time">
              <div>Mon-Sat ----- 10am-6pm</div>
              
            </div>
          </div>
          <div className="footer-box4">
            <h1>Stay Up To Date</h1>
            <Stack spacing={4}>
              <InputGroup size="sm">
                <Input placeholder="Email" w={300} />
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
