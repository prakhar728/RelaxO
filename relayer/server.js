const express = require('express')
const app = express();
var cors = require('cors');
const { ethers } = require("ethers");
require("dotenv").config();

const privateKey = process.env.PRIVATE_KEY;
console.log(privateKey);
const PORT = process.env.PORT || 5000;


app.use(cors());
app.use(express.json());



const provider = new ethers.JsonRpcProvider('https://rpc.testnet.mantle.xyz/');
const mTcontractABI = require('./contractData/MockToken.json');
const mTAddress = require('./contractData/MockToken-address.json');
const wallet = new ethers.Wallet(privateKey,provider)
const mockContract = new ethers.Contract( mTAddress.address , mTcontractABI.abi , wallet )




app.get('/healthCheck',(req,res)=>{
    return res.json('Beep Beep Boop Boop. Server is working')
})

app.post('/rewardUser',async (req,res)=>{
    if(!req.body.userAddress){
        return res.status(404).json({msg:"Need User Id"})
    }
    console.log('Transferring Tokens');
    try {
        
        await (await mockContract.transfer(req.body.userAddress,100)).wait();
    } catch (error) {
        console.log(error);
        return res.status(403).json({error:error})
    }
    return res.status(200).json({msg:"Rewarded the user with 1000 tokens"})
})
app.post('/balance',async (req,res)=>{
    if(!req.body.userAddress){
        return res.status(404).json({msg:"Need User Id"})
    }
    console.log('Getting Balance');
    try {
        
        const balance = await mockContract.balanceOf(req.body.userAddress);
        console.log(Number(balance));
        return res.status(200).json(Number(balance));
    } catch (error) {
        console.log(error);
        return res.status(403).json({error:error})
    }
})

app.post('/createplan',(req,res)=>{
    
})
app.listen(PORT,()=>{
    console.log('Server is now Active');
})