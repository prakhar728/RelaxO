import  { useEffect, useState } from 'react'
import './style.css';
import arrow from "../assets/arrow.svg";
import {Magic} from "magic-sdk";
import {ethers} from "ethers";
const magic = new Magic(process.env.REACT_APP_PUBLISH_KEY);
const provider = new ethers.BrowserProvider(magic.rpcProvider);

const signer = await provider.getSigner();
console.log(await signer.getAddress());

const Creator =  () => {
    const [useraddress, setuseraddress] = useState("asdad")
    const [planData, setplanData] = useState({
        mA:"",
        tA:"",
        duration:"",
        amount:"",
    })
    const getTheAddress = async() =>{
        setuseraddress(await signer.getAddress())
    }
    useEffect( () => {
        getTheAddress();
      }, [signer])
    const createPlan = () =>{
        console.log('Creating Plan');
        
    }
    
    
  return (
    <div className="CreatorWrapper">
        <div className='creatorNavbar'>
            <div>{useraddress} <span>Balance:1000</span></div>
        </div>
        <div className="creatorMain">
            <h2 className='creatorHeading'>
                Add Your Plan
            </h2>
            <form className='creatorForm'>
                <input placeholder='Enter Merchants Address' value={planData.mA} onChange={(e)=>{
                    setplanData({...planData,mA:e.target.value})
                }}/>
                <input placeholder='Enter Token Address' value={planData.tA} onChange={(e)=>{
                    setplanData({...planData,tA:e.target.value})
                }}/>
                <input placeholder='Enter Duration of Plan' value={planData.duration} onChange={(e)=>{
                    setplanData({...planData,duration:e.target.value})
                }}/>
                <input placeholder='Enter Amount for the Plan' value={planData.amount} onChange={(e)=>{
                    setplanData({...planData,amount:e.target.value})
                }}/>
            </form>
            <button onClick={createPlan}><img src={arrow} alt="arrow" /></button>

        </div>
    </div>
  )
}

export default Creator