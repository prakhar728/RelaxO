import './style.css';
import myPlan from "../assets/myPlan.svg";
import myList from "../assets/myList.svg";
import { useNavigate } from 'react-router-dom';

const SideNAv = () => {
  const navigate = useNavigate();
  return (
    <div className="sideNavWrapper">
      <div className='linkHolder'>
        <div className='linkHolderInner' onClick={()=>{
          navigate('/app/subscriptions')
        }}>
          <img src={myList} alt="Subscriptions" />
          My Subscriptions
        </div>
        <div className='linkHolderInner' onClick={()=>{
          navigate('/app/creator')
        }}>
          <img src={myPlan} alt="Plan Creator" />
          Create Plan
        </div>
      </div>
    </div>
  )
}

export default SideNAv