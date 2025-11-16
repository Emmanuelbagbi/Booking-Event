import { CiCalendarDate } from 'react-icons/ci'
import './WinterSpecial.css'
import { CiLocationOn } from "react-icons/ci";


function WinterSpecial() {
  return (
    <div className='winterspecial'>
        <div className="wnter-special-title">
            <h1>Hand-picked Events</h1>
            <p>Discover more of the best in food, music, wellness,  <br className='brake'/>
                and more with our curated event collections</p>
        </div>


        <div className="parent">
        <div className="div3">
            <span>
                <h3>Collaborating Mk Virtual Networking</h3>
                <p><CiCalendarDate style={{ fontSize: "20px" }} />  December 13 @ 10:00am </p>
                 <p><CiLocationOn style={{ fontSize: "20px" }} /> Amsterdam </p>
            </span>
        </div>



        <div className="div6">
            
           <div className="div6">
            <span>
                <h3>NYC Real Estate Expo Live Networking Sessions</h3>
                <p><CiCalendarDate style={{ fontSize: "20px" }} />  December 13 @ 10:00am </p>
                 <p><CiLocationOn style={{ fontSize: "20px" }} /> Amsterdam </p>
            </span>
        </div>
        </div>



        <div className="div7">
           <span>
                <h3>Tips for Effective at Business Events</h3>
                <p><CiCalendarDate style={{ fontSize: "20px" }} />  December 13 @ 10:00am </p>
                 <p><CiLocationOn style={{ fontSize: "20px" }} /> Amsterdam </p>
            </span>
        </div>



        <div className="div8">
            <span>
                <h3>NYC Real Estate Expo Live Networking Sessions</h3>
                <p><CiCalendarDate style={{ fontSize: "20px" }} />  December 13 @ 10:00am </p>
                 <p><CiLocationOn style={{ fontSize: "20px" }} /> Amsterdam </p>
            </span>
        </div>



        <div className="div9">
            
             <span>
                <h3>NYC Real Estate Expo Live Networking Sessions</h3>
                <p><CiCalendarDate style={{ fontSize: "20px" }} />  December 13 @ 10:00am </p>
                 <p><CiLocationOn style={{ fontSize: "20px" }} /> Amsterdam </p>
            </span>
        </div>
        </div>
    </div>
  )
}

export default WinterSpecial