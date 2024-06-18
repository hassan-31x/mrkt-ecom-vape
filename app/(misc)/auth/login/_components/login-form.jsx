"use client";

import { Tabs, TabList, Tab, TabPanel } from "react-tabs";
import SignInComponent from "./sign-in";

const LoginForm = () => {
  return (
    <Tabs selectedTabClassName="show" defaultIndex={0}>
      <TabList className="nav nav-pills nav-fill">
        <Tab className="nav-item">
          <span className="nav-link">Individual</span>
        </Tab>

        <Tab className="nav-item">
          <span className="nav-link">Business</span>
        </Tab>
      </TabList>

      <div className="tab-content">
        <TabPanel style={{ paddingTop: "2rem" }}>
          <SignInComponent type="user" />
        </TabPanel>

        <TabPanel>
          <SignInComponent type="business" />
        </TabPanel>
      </div>
    </Tabs>
  );
};

export default LoginForm;
