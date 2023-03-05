import { ReactNode } from "react";
import {
  Box,
  Flex,
  Avatar,
  HStack,
  Link,
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
import { NavLink } from "react-router-dom";

import "../css/navbar_hero.css";

export function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <div>
        <div className="navbarBox">
          <IconButton
            size={"md"}
            icon={isOpen ? <AiOutlineClose /> : <GoThreeBars />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
          <div className="mobile-view-logo">
            <img src="./images/logo6.png" alt="logo" />
          </div>
          <div className="navbar-data-container">
            <div className="logo">
              <img src="./images/4.png" alt="logo" className="desktop-logo" />
            </div>
            <div className="navlink-container">
              <NavLink to="#">Home</NavLink>
              <NavLink to="#">About Us</NavLink>
              <NavLink to="#">Our Service</NavLink>
              <NavLink to="#">Testimonial</NavLink>
              <NavLink to="#">Contact Us</NavLink>
            </div>
            <div className="navbar-contact">
              <button className="desktop-contact-button">
                <BsFillTelephoneFill style={{display:"inline",color:"orange",paddingTop:"6",paddingRight:"4"}}/><a href="tel:+98395 36210" style={{color:"white"}}>+98395 36210</a>
              </button>
            </div>
          </div>
        </div>

        {/* mobile view */}
        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <div className="mobile-navlink-container">
              <NavLink to="#">Home</NavLink>
              <NavLink to="#">About Us</NavLink>
              <NavLink to="#">Our Service</NavLink>
              <NavLink to="#">Testimonial</NavLink>
              <NavLink to="#">
                <input type="button" value="" />
                <button className="contact-button">
                  <a href="tel:+98395 36210">+98395 36210</a>
                </button>
              </NavLink>
            </div>
          </Box>
        ) : null}
      </div>
    </>
  );
}
