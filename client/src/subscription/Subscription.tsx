import  { useState } from 'react'
import './style.css'
import SideNAv from '../sideNav/SideNav'
const Subscription = () => {
  const [id, setid] = useState("")
  return (
    <>
      <SideNAv />

    <div className='subscriptionWrapper'>
      <div className="subscriptionMainContent">
        <h2>Subscription ID: {id}</h2>
        <div className="subscriptionInfo">
          <div className='infoWrappare'>
            <div>Merchant's Address</div>
            <div>Token Address</div>
            <div>Duration</div>
            <div>Amount</div>
          </div>
          <div className='buttonWrapper'>
            <button>Subscribe</button>
            <button>Cancel Subscription</button>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Subscription