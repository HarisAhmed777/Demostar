import React, { useState } from "react";
import { Tabs, Tab, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import './Both.css'; 
import Login from "../Loginfile/Login";
import Signup from "../Loginfile/signuppage";

function Both() {
  return (
    <>
      <div className="both-container">
        <div className="content-container">
          <div className="mobile-tabs">
            <Tabs>
              <TabList>
                <Tab>Login</Tab>
                <Tab>Signup</Tab>
              </TabList>

              <TabPanel>
                <Login />
              </TabPanel>
              <TabPanel>
                <Signup />
              </TabPanel>
            </Tabs>
          </div>
          <div className="desktop-content">
            <div className="content">
              <Login />
            </div>
            <div className="content">
              <Signup />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Both;
