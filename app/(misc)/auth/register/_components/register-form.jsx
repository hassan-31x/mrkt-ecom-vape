"use client";

import { Tabs, TabList, Tab, TabPanel } from "react-tabs";
import IndividualSignUpComponent from "./individual-sign-up";
import BusinessOnlineSignUpComponent from "./business-online-sign-up";
import { useState } from "react";

const RegisterForm = () => {
  const [step, setStep] = useState(1);

  return (
    <div>
      {
        step === 0 && (
          <div className="w-full">
            <h3 className="">Bersiaplah berkelana rasa bersama mrkt Indonesia</h3>
            <p>
            Tujuan Anda menggunakan produk mrkt?
            </p>
            <div className="flex flex-col gap-5 mt-4">
              <button onClick={() => setStep(1)} className="w-full h-24 cursor-pointer hover:bg-slate-400 transition-all duration-100 bg-slate-300 border-[1px] border-solid !border-black text-black font-medium text-2xl rounded-2xl">Penggunaan personal/individu</button>
              <button onClick={() => setStep(2)} className="w-full h-24 cursor-pointer hover:bg-slate-400 transition-all duration-100 bg-slate-300 border-[1px] border-solid !border-black text-black font-medium text-2xl rounded-2xl">Tujuan bisnis/komersial</button>
            </div>

          </div>
        )
      }
      {step === 1 &&
        <IndividualSignUpComponent />
      }
    </div>

    // <Tabs selectedTabClassName="show" defaultIndex={0}>
    //   <TabList className="nav nav-pills nav-fill">
    //     <Tab className="nav-item">
    //       <span className="nav-link">Individual</span>
    //     </Tab>

    //     <Tab className="nav-item">
    //       <span className="nav-link">Business</span>
    //     </Tab>
    //   </TabList>

    //   <div className="tab-content">
    //     <TabPanel style={{ paddingTop: "2rem" }}>
    //       <BusinessOnlineSignUpComponent type="user" />
    //     </TabPanel>

    //     <TabPanel>
    //       <BusinessOnlineSignUpComponent type="business" />
    //     </TabPanel>
    //   </div>
    // </Tabs>
  );
};

export default RegisterForm;
