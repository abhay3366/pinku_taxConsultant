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
        <div className="whatsapp">
          <div className="custom">
            <div class="whatsapp">
              <NavLink
                to="https://api.whatsapp.com/send?phone=+91 9839536210&amp;text=Hello"
                target="_blank">
                <img
                  src="data:image/jpeg;base64,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"
                  style={{ border: "0", width: "51px" }}
                />
              </NavLink>
            </div>
          </div>
        </div>
        <div className="footer-container">
          <div className="mobile-footer">
            <Text>&copy; 2023 Copyright :Rupendra Chaubey & Company.</Text>
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
