import PageHeader from "@/components/features/page-header";
import React, { useState } from "react";

const initialData = {
  accountName: "",
  accountNo: "",
  accountType: "",
};

const AffiliateComponent = ({ discount, balance }) => {
  const [data, setData] = useState(initialData);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(data);
  }

  return (
    <div className="main pb-24">
      <PageHeader title="Affiliate Marketing" subTitle="" />
      <div>
        {JSON.stringify(discount)}, {balance}
      </div>

      <div className="w-full flex flex-col items-center">
        <div className="w-[90%] max-w-2xl flex justify-center items-center form-group">
          <label className="w-[250px]">
            Available Amount
            <input type="text" value={`Rp   ${balance || 0}`} disabled className="form-control" />
          </label>
        </div>
        <br />
        <form className="flex flex-col items-center py-16 border w-[90%] max-w-screen-lg">
          <label className="w-[250px]">
            Account Holder Name
            <input type="text" value={data.accountName} name="accountName" onChange={handleChange} disabled={balance === 0} className="form-control" />
          </label>
          <label className="w-[250px]">
            Account Number
            <input type="text" value={data.accountNo} name="accountNo" onChange={handleChange} disabled={balance === 0} className="form-control" />
          </label>
          <label className="w-[250px]">
            Account Type
            <input type="text" value={data.accountType} name="accountType" onChange={handleChange} disabled={balance === 0} className="form-control" />
          </label>
          <button className="btn btn-primary w-16" disabled={balance === 0}>Withdraw</button>
        </form>
      </div>
    </div>
  );
};

export default AffiliateComponent;
