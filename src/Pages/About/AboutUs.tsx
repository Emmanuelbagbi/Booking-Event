
import './AboutUs.css';
import LuxuryHotelFooter from '../../components/Footer/Footer';
import Navbar from '../../components/Nav/Navbar';
import Vlog from "../../assets/Images/home-6-slider-img-1.jpg";

const AboutUs: React.FC = () => {

  return (
    <>
      <Navbar />
      {/* Header with Background */}
      <div
        className="tripHeader"
        style={{
          backgroundImage: `url(${Vlog})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="overlay">
          <h3>About Us</h3>
        </div>
      </div>
      <LuxuryHotelFooter />
    </>
  );
};

export default AboutUs;
