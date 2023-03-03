import { Button } from "@chakra-ui/react";
import React from "react";
import { NavLink } from "react-router-dom";

const HeroSection = () => {
  return (
    <>
      <div className="hero-container">
        <div className="hero-data-container">
          <h1>We Are Here To Help You On Tax Consulation</h1>
          <p>
            We listen and effectively respond to you needs and those of your
            clients,We are expert at translating those needs into soluations.
          </p>
          <div>
            <NavLink>
              <div>
                <Button colorScheme="linkedin">Get a Free Consulation</Button>
              </div>
            </NavLink>
            <NavLink>
              <Button colorScheme="linkedin">View Our Services</Button>
            </NavLink>
          </div>
        </div>
        <div className="hero-image-container">
          <figure>
            <img src="./images/ab.png" alt="heroImg" className="hero-image" />
            <figcaption>Fig.1 - Trulli, Puglia, Italy.</figcaption>
          </figure>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
