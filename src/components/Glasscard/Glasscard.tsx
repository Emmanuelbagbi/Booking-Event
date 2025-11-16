
import "./Glasscard.css";
import { IoIosAirplane } from "react-icons/io";

const GlassCard = () => {
  return (
    <div className="glass-container">
      <div className="glass-card50">
        <div>
          <h2 className="glasscardh2">Music & <br /> Festivals</h2>
          <button className="placecircle"><IoIosAirplane style={{fontSize: "20px"}} /></button>
        </div>
        
        <div className="glass-card-image"></div>
      </div>



      <div className="glass-card1">
        <div>
          <h2 className="glasscardh2">Events, Connect <br /> & Experience</h2>
          <button className="placecircle"><IoIosAirplane style={{fontSize: "20px"}} /></button>
        </div>
        
        <div className="glass-card-image1"></div>
      </div>
    </div>
  );
};

export default GlassCard;
