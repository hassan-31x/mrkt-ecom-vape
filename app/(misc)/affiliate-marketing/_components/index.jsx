import PageHeader from '@/components/features/page-header'
import React from 'react'

const AffiliateComponent = ({ discount, balance }) => {
  return (
    <div className="main">
      <PageHeader title="Affiliate Marketing" subTitle="" />
    <div>{JSON.stringify(discount)}, {balance}</div>

<div className='w-full flex flex-col items-center'>

    <div className='w-[90%] max-w-2xl form-group'>
        <label>
Available Amount
        <input type="text" value={`Rp   ${balance || 0}`} disabled className='form-control' />
        </label>
    </div>
        <button className='btn btn-primary w-16'>Withdraw</button>
</div>
    </div>
  )
}

export default AffiliateComponent