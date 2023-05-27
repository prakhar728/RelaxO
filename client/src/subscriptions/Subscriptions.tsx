import SideNAv from '../sideNav/SideNav';
import './style.css';
const Subscriptions = () => {
  return (
    <div className="subscriptionListWrapper">
        <SideNAv />
        <div className='subscriptionListMain'>
            <h2>My Subscriptions</h2>
            <div className='listOfSubscriptions'>
                <div className='subscriptionCard'>
                    <h3>Merchant’s ID</h3>
                    <div><button>View</button></div>
                </div>
                <div className='subscriptionCard'>
                    <h3>Merchant’s ID</h3>
                    <div><button>View</button></div>
                </div>
                <div className='subscriptionCard'>
                    <h3>Merchant’s ID</h3>
                    <div><button>View</button></div>
                </div>
                <div className='subscriptionCard'>
                    <h3>Merchant’s ID</h3>
                    <div><button>View</button></div>
                </div>
                <div className='subscriptionCard'>
                    <h3>Merchant’s ID</h3>
                    <div><button>View</button></div>
                </div>
                <div className='subscriptionCard'>
                    <h3>Merchant’s ID</h3>
                    <div><button>View</button></div>
                </div>
             
            </div>
        </div>
    </div>
  )
}

export default Subscriptions