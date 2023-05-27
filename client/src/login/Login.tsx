import { useEffect, useState } from 'react';
import './style.css';
import 'react-toastify/dist/ReactToastify.css';
import arrow from "../assets/arrow.svg";
import { useNavigate } from 'react-router-dom';
import { Magic } from 'magic-sdk';

const Login = () => {
  const customNodeOptions = {
    rpcUrl: "https://rpc.testnet.mantle.xyz", 
    chainId: 5001 
  }
  const magic = new Magic("pk_live_011429E8F4B976DA",
    { network: customNodeOptions });

  const navigate = useNavigate();
  const [phoneNumber, setphonenumber] = useState("");
  const [loggedIn, setloggedIn] = useState(false)
  // const notify = () => toast("Wow so easy!");
  useEffect(() => {
    if (loggedIn) {
      navigate('/app/dashboard')
    }
  }, [loggedIn])


  const tryLogin = async (e: any) => {
    e.preventDefault();
    const loggedInData = await magic.auth.loginWithSMS({ phoneNumber });
    console.log(loggedInData);
    
    setloggedIn(true);
  }
  return (
    <div className='loginBackground'>

      <div className='loginWrapper'>
        <div className='loginMain'>
          <form>
            <label>Enter your Phone Number</label>
            <input type="text" value={phoneNumber} onChange={(e) => {
              setphonenumber(e.target.value);
            }} />
            <button onClick={tryLogin}><img src={arrow} alt="arrow" /></button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login