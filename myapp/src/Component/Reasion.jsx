import React from "react";
import { Text, Button, Heading } from "@chakra-ui/react";
const Reasion = () => {
  return (
    <>
      <div className="tax-relif-section">
        <div className="tax-relif-container">
          <div className="tax-relif-container-data">
            <Heading size="sm" bg={"#FFAB66 "} display={"inline"} w={250}>
              We Are Here For Your Tax Relief
            </Heading>

            <h2>We Handle The Most Tedious Task of Your Business Operation</h2>
            <p>
              We provides tax advice and support to individuals, businesses, and
              organizations on various tax issues. Their work typically involves
              preparing and submitting tax returns, researching tax laws,
              advising on tax planning, and representing clients in disputes
              with the tax authorities.
            </p>
            <Button colorScheme="linkedin" w={130} backgroundColor={"#FFAB66"}>
              More
            </Button>
          </div>
          <div className="tax-relif-img">
            <img src="./images/img.jpg" alt="img" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Reasion;
