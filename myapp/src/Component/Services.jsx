import React from "react";
import { BiSpreadsheet } from "react-icons/bi";
import {
  BsFileSpreadsheet,
  BsFillFileEarmarkSpreadsheetFill,
  BsFillFileSpreadsheetFill,
} from "react-icons/bs";
import { TbFileSpreadsheet } from "react-icons/tb";
import { MdAppRegistration } from "react-icons/md";
const Services = () => {
  return (
    <>
      <div className="services-section">
        <h1>Services</h1>
        <div className="services-container">
          <div className="service-box">
            <h2>
              <BiSpreadsheet className="service-icon" />
              <span>TDS Returning</span>
            </h2>
            <p>
              TDS (Tax Deducted at Source) return filing is a mandatory
              requirement for individuals and entities who have deducted TDS
              from payments made to others.
            </p>
          </div>
          <div className="service-box">
            <h2>
              <MdAppRegistration className="service-icon" />
              <span> Balance Sheet</span>
            </h2>
            <p>
              Balance sheet is a financial statement that shows the financial
              position of a company at a particular point in time. It provides a
              snapshot of the company's assets, liabilities, and equity.
            </p>
            <p></p>
          </div>
          <div className="service-box">
            <h2>
              <BsFillFileEarmarkSpreadsheetFill className="service-icon" />
              <span>Income Tax Return</span>
            </h2>
            <p>
              Income tax return is a form that taxpayers file with the tax
              authority of their country to report their income, calculate their
              tax liability, and pay the taxes owed or claim a refund.
            </p>
          </div>
          <div className="service-box">
            <h2>
              <TbFileSpreadsheet className="service-icon" />
              <span>Accounting Services</span>
            </h2>
            <p>
              Accounting services refer to the professional services provided by
              an accountant or accounting firm to individuals, businesses, or
              organizations to manage their financial records.
            </p>
          </div>
          <div className="service-box">
            <h2>
              <BsFileSpreadsheet className="service-icon" />
              <span>GST Registration / GST Return</span>
            </h2>
            <p>
              GST (Goods and Services Tax) registration and GST return are two
              important aspects of the GST system that businesses need to comply
              with.
            </p>
            <p></p>
          </div>
          <div className="service-box">
            <h2>
              <BsFillFileSpreadsheetFill className="service-icon" />
              <span>Projected balance Sheet</span>
            </h2>
            <p>
              projected balance sheet is a financial statement that estimates
              the financial position of a company at a future point in time
              based on its current financial performance and expected future
              activities.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
