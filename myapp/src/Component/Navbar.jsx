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
import { NavLink } from "react-router-dom";

import "./Home.css"



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
          <div className="mobile-view-logo">Logo</div>
          <div className="navbar-data-container">
            <div className="logo">Logo</div>
            <div className="navlink-container">
              <NavLink to="#">Home</NavLink>
              <NavLink to="#">About Us</NavLink>
              <NavLink to="#">Our Service</NavLink>
              <NavLink to="#">Testimonial</NavLink>
              <NavLink to="#">Contact Us</NavLink>
            </div>
            <div className="navbar-contact">Contact</div>
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
              <NavLink to="#">Contact Us</NavLink>
            </div>
          </Box>
        ) : null}
      </div>

      <Box p={4}>Main Content Here</Box>
    </>
  );
}
