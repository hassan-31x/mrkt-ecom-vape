import PageHeader from "@/components/features/page-header";
import React, { useState } from "react";

const initialData = {
  accountName: "",
  accountNo: "",
  accountType: "",
};

const AffiliateComponent = ({ discount, balance }) => {
  console.log("🚀 ~ AffiliateComponent ~ discount:", discount)
  const [data, setData] = useState(initialData);
  const [copyClicked, setCopyClicked] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(data);
  }

  const copyCode = () => {
    navigator.clipboard.writeText(discount?.code);
    setCopyClicked(true);

    setTimeout(() => {
      setCopyClicked(false);
    }, 1500);
  }

  return (
    <div className="main pb-24">
      <PageHeader title="Affiliate Marketing" subTitle="" />
      {/* <div>
        {JSON.stringify(discount)}, {balance}
      </div> */}

      <div className="w-full flex flex-col items-center pt-5">
        <div className="w-[90%] max-w-6xl justify-between flex flex-col md:flex-row gap-10 md:gap-0 form-group">
          <label className="w-[200px] md:w-[250px] !mb-0">
            Available Amount
            <input type="text" value={`Rp   ${balance || 0}`} disabled className="form-control" />
          </label>
          <div className="flex items-end">
            <label className="w-[200px] md:w-[250px] !mb-0">
              Affiliate Code
              <input type="text" value={discount?.code} disabled className="form-control" />
            </label>
            <button className="btn btn-white !border !border-black !min-w-[100px] !h-[41px] copy-button" onClick={copyCode}>{copyClicked ? 'Copied' : 'Copy'}</button>
          </div>
        </div>
        <br />
        <form className="flex flex-col items-center py-16 border w-[90%] max-w-screen-lg">
          <h2 className="py-2">Withdraw</h2>
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
