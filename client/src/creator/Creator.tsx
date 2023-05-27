import  { useEffect, useState } from 'react'
import './style.css';
import arrow from "../assets/arrow.svg";
import {Magic} from "magic-sdk";
import {ethers} from "ethers";
import axios from 'axios';
import {baseURL} from "../Common"
// import mockTokenAddress from "../assets/contractData/MockToken-address.json";
// import mockTokenABI from "../assets/contractData/MockToken.json";
// const PUBLIC_KEY = process.env.REACT_APP_PUBLISH_KEY|| "";

const magic = new Magic("pk_live_011429E8F4B976DA");
console.log(magic.rpcProvider);

const provider = new ethers.BrowserProvider(magic.rpcProvider);

const signer = await provider.getSigner();

const Creator =  () => {
    const [useraddress, setuseraddress] = useState("asdad");
    const [balance, setbalance] = useState(0)
    const [planData, setplanData] = useState({
        mA:"",
        tA:"",
        duration:"",
        amount:"",
    })
    const getTheAddress = async() =>{
        setuseraddress(await signer.getAddress())
    }
    const getTheBalance = async()=>{
        axios.post(`${baseURL}/Balance`,{
            userAddress:useraddress
        })
        .then((res)=>{
            console.log(res.data);
            setbalance(res.data)
            
        })
        .catch((err)=>{
            console.log(err);
        })
    }
    useEffect(() => {
    getTheBalance();
    }, [useraddress])
    
    // const getUserBalance = async() =>{
    //     if(useraddress)
    //     setbalance(await contract.balanceOf(useraddress));
    // }
    useEffect( () => {
        getTheAddress();
      }, [signer])
    //   useEffect( () => {
    //     getUserBalance();
    //   }, [contract])
    const createPlan = () =>{
        console.log('Creating Plan');
        
    }
    
    
  return (
    <div className="CreatorWrapper">
        <div className='creatorNavbar'>
            <div>{useraddress} <span>Balance:{balance}</span></div>
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