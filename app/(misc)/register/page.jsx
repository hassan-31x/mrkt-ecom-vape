

import Link from "next/link";
import { Tabs, TabList, Tab, TabPanel } from "react-tabs";
import { useRouter } from "next/navigation";
import SignUpComponent from "./_components/sign-up";

  export const metadata = {
    title: "Register",
  }

function RegisterPageComponent() {
  const router = useRouter()

  return (
    <div className="main">
      <nav className="breadcrumb-nav border-0 mb-0">
        <div className="container">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <Link href="/">Home</Link>
            </li>
            <li className="breadcrumb-item active">Login</li>
          </ol>
        </div>
      </nav>

      <div
        className="login-page bg-image pt-8 pb-8 pt-md-12 pb-md-12 pt-lg-17 pb-lg-17"
        style={{ backgroundImage: `url(/images/backgrounds/login-bg.jpg)` }}
      >
        <div className="container">
          <div className="form-box">
            <div className="form-tab">
              <Tabs selectedTabClassName="show" defaultIndex={0}>
                <TabList className="nav nav-pills nav-fill">
                  <Tab className="nav-item">
                    <span className="nav-link">Sign In</span>
                  </Tab>

                  <Tab className="nav-item">
                    <span className="nav-link">Register</span>
                  </Tab>
                </TabList>

                <div className="tab-content">
                  <TabPanel style={{ paddingTop: "2rem" }}>
                    <SignUpComponent type="individual" />
                  </TabPanel>

                  <TabPanel>
                    <SignUpComponent type="business" />
                  </TabPanel>
                </div>
              </Tabs>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegisterPageComponent;
