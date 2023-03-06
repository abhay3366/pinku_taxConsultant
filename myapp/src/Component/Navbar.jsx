import { ReactNode } from "react";
import {Link} from "react-scroll"
import {
  Box,
  Flex,
  Avatar,
  HStack,
  
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
} from "@chakra-ui/react";
import { AiOutlineClose } from "react-icons/ai";
import { GoThreeBars } from "react-icons/go";
import { BsFillTelephoneFill } from "react-icons/bs";


import "../css/navbar_hero.css";

export function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <div>
        <div className="navbarBox">
          <IconButton
            style={{ backgroundColor: "#34E598" }}
            size={"md"}
            icon={
              isOpen ? (
                <AiOutlineClose style={{ marginLeft: "10px" }} />
              ) : (
                <GoThreeBars style={{ marginLeft: "10px" }} />
              )
            }
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
          <div className="mobile-view-logo">
            <img src="./images/4.png" alt="logo" className="desktop-logo" />
          </div>
          <div className="navbar-data-container">
            <div className="logo">
              <img src="./images/4.png" alt="logo" className="desktop-logo" />
            </div>
            <div className="navlink-container">
              <Link to="#" className="navlink">
                Home
              </Link>
              <Link
                to="about"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
                className="navlink">
                About Us
              </Link>
              <Link
                to="services"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
                className="navlink">
                Our Service
              </Link>
              <Link
                to="testimonials"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
                className="navlink">
                Testimonial
              </Link>
              <Link
                to="contact"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
                className="navlink">
                Contact Us
              </Link>
            </div>
            <div className="navbar-contact">
              <button className="desktop-contact-button">
                <BsFillTelephoneFill
                  style={{
                    display: "inline",
                    color: "orange",
                    paddingTop: "6",
                    paddingRight: "4",
                  }}
                />
                <a href="tel:+98395 36210" style={{ color: "white" }}>
                  +98395 36210
                </a>
              </button>
            </div>
          </div>
        </div>

        {/* mobile view */}
        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <div className="mobile-navlink-container">
              <Link
                to="#"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
                className="navlink">
                Home
              </Link>
              <Link
                to="about"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
                className="navlink">
                About Us
              </Link>
              <Link
                to="services"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
                className="navlink">
                Our Service
              </Link>
              <Link
                to="testimonials"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
                className="navlink">
                Testimonial
              </Link>
              <Link
                to="contact"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
                className="navlink">
                <input type="button" value="" />
                <button className="contact-button">
                  <a href="tel:+98395 36210">+98395 36210</a>
                </button>
              </Link>
            </div>
          </Box>
        ) : null}
      </div>
    </>
  );
}
