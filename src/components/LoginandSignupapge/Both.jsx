import React, { useState } from "react";
import { Tabs, Tab, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import './Both.css'; 
import Login from "../Loginfile/Login";
import Signup from "../Loginfile/signuppage";

function Both() {
  return (
    <>
    <div className="paddingtop">
      <div className="both-container mb-4">
        <div className="content-container">
          <div className="mobile-tabs">
          <Tabs>
      <TabList className="custom-tab-list text-warning">
        <Tab className="custom-tab text-dark">Login</Tab>
        <Tab className="custom-tab text-dark">Signup</Tab>
      </TabList>

      <TabPanel>
        <Login />
      </TabPanel>
      <TabPanel>
        <Signup />
      </TabPanel>
    </Tabs>
          </div>
          <div className="desktop-content ">
            <div className="content paddingtop">
              <Login />
            </div>
            <div className="content">
              <Signup />
            </div>
          </div>
        </div>
      </div>
      </div>
    </>
  );
}

export default Both;
