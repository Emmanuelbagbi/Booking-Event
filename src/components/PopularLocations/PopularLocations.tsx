import "./PopularLocations.css";
import { FaLocationDot } from "react-icons/fa6";
import StarRating from "../StarRating/StarRating";
import { FaTelegramPlane } from "react-icons/fa";

const PopularLocations = () => {
  return (
    <section className="locations">
      <div className="locations-header">
        <span className="plan2">
          <p>Event Pass</p>
          <h1>Experience More, Worry Less.</h1>
        </span>
      </div>

      <div className="content-div">
        <div className="section1">
          <div className="section1-holder">
            <div className="five">
              <StarRating rating={1} size={20} color="#1D4674" />
              <h3>5</h3>
            </div>
            <div className="details">
              <span>
                <StarRating rating={5} size={14} color="#fff" /> 
                <p>5 Dari 5</p>
              </span>
              <h1>Bali Safari & Marine Park</h1>
              <span className="detail-icon">
                <p><FaLocationDot /> Bali</p>
                <p><FaTelegramPlane /> Book Now</p>
              </span>
            </div>
          </div>
        </div>
        <div className="section2">
          <div className="section2A">
            <div className="section2A-holder">
              <div className="five">
                <StarRating rating={1} size={20} color="#1D4674" />
                <h3>5</h3>
              </div>
              <div className="details">
                <span>
                  <StarRating rating={5} size={14} color="#fff" /> 
                  <p>5 Dari 5</p>
                </span>
                <h1>Bali Safari & Marine Park</h1>
                <span className="detail-icon">
                  <p><FaLocationDot /> Bali</p>
                  <p><FaTelegramPlane /> Book Now</p>
                </span>
              </div>
            </div>
          </div>
          <div className="section2B">
            <div className="section2A-holder">
              <div className="five">
                <StarRating rating={1} size={20} color="#1D4674" />
                <h3>5</h3>
              </div>
              <div className="details">
                <span>
                  <StarRating rating={5} size={14} color="#fff" /> 
                  <p>5 Dari 5</p>
                </span>
                <h1>Bali Safari & Marine Park</h1>
                <span className="detail-icon">
                  <p><FaLocationDot /> Bali</p>
                  <p><FaTelegramPlane /> Book Now</p>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="section3">
          <div className="section1-holder">
            <div className="five">
              <StarRating rating={1} size={20} color="#1D4674" />
              <h3>5</h3>
            </div>
            <div className="details">
              <span>
                <StarRating rating={5} size={14} color="#fff" /> 
                <p>5 Dari 5</p>
              </span>
              <h1>Bali Safari & Marine Park</h1>
              <span className="detail-icon">
                <p><FaLocationDot /> Bali</p>
                <p><FaTelegramPlane /> Book Now</p>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PopularLocations;