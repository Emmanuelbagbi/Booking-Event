import React from "react";
import "./Gallery.css";
import Vlog1 from "../../assets/Images/home-6-slider-img-3.jpg";
import Navbar from "../../components/Nav/Navbar";
import LuxuryHotelFooter from "../../components/Footer/Footer";

const Gallery: React.FC = () => {
  return (
    <>
    <Navbar />
    <div
        className="tripHeader"
        style={{
          backgroundImage: `url(${Vlog1})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="overlay">
          <h3>Image Gallery</h3>
        </div>
      </div>
        <div className="gallery-container1">
      {/* Row 1 */}
      <div className="gallery-card1 wide">
        <div className="tagman">
          <span className="tag1">TECHNICAL</span>
        </div>
        <div className="overlay1">
          <h3>A Guide To Rocky Mountain Vacations</h3>
          <div className="avatars1">
            <img src="https://i.pravatar.cc/40?img=1" alt="user" />
            <img src="https://i.pravatar.cc/40?img=2" alt="user" />
            <img src="https://i.pravatar.cc/40?img=3" alt="user" />
          </div>
        </div>
      </div>

      <div className="gallery-card2 normal">
        <div className="tagman">
          <span className="tag1">TECHNICAL</span>
        </div>
        <div className="overlay1">
          <h3>Traveling To USA</h3>
          <div className="avatars1">
            <img src="https://i.pravatar.cc/40?img=4" alt="user" />
            <img src="https://i.pravatar.cc/40?img=5" alt="user" />
          </div>
        </div>
      </div>

      {/* Row 2 */}
      <div className="gallery-card3 normal">
        <div className="tagman">
          <span className="tag1">CULTURAL</span>
        </div>
        <div className="overlay1">
          <h3>Party Jokes Starting But Unnecessary</h3>
          <div className="avatars1">
            <img src="https://i.pravatar.cc/40?img=6" alt="user" />
            <img src="https://i.pravatar.cc/40?img=7" alt="user" />
          </div>
        </div>
      </div>

      <div className="gallery-card4 normal">
        <div className="tagman">
          <span className="tag1">CULTURAL</span>
        </div>
        <div className="overlay1">
          <h3>Maui By Air The Best Way Around The Island</h3>
          <div className="avatars1">
            <img src="https://i.pravatar.cc/40?img=8" alt="user" />
            <img src="https://i.pravatar.cc/40?img=9" alt="user" />
          </div>
        </div>
      </div>

      <div className="gallery-card5 normal dark">
        <div className="tagman">
          <span className="tag1">CULTURAL</span>
        </div>
        <div className="overlay1">
          <p>
            Man cannot discover new oceans unless he has the courage to lose
            sight of the shore.
          </p>
          <div className="avatars1">
            <img src="https://i.pravatar.cc/40?img=10" alt="user" />
            <img src="https://i.pravatar.cc/40?img=11" alt="user" />
          </div>
        </div>
      </div>

      {/* Row 3 */}
      <div className="gallery-card6 normal">
        <div className="tagman">
          <span className="tag1">TECHNICAL</span>
        </div>
        <div className="overlay1">
          <h3>Traveling To Barcelona</h3>
          <div className="avatars1">
            <img src="https://i.pravatar.cc/40?img=12" alt="user" />
            <img src="https://i.pravatar.cc/40?img=13" alt="user" />
          </div>
        </div>
      </div>

      <div className="gallery-card7 wide">
        <div className="tagman">
          <span className="tag1">CULTURAL</span>
        </div>
        <div className="overlay1">
          <h3>A Guide To Rocky Mountain Vacations</h3>
          <div className="avatars1">
            <img src="https://i.pravatar.cc/40?img=14" alt="user" />
            <img src="https://i.pravatar.cc/40?img=15" alt="user" />
          </div>
        </div>
      </div>

      {/* Row 4 */}
      <div className="gallery-card8 normal">
        <div className="tagman">
          <span className="tag1">TECHNICAL</span>
        </div>
        <div className="overlay1">
          <h3>Party Jokes Starting But Unnecessary</h3>
          <div className="avatars1">
            <img src="https://i.pravatar.cc/40?img=16" alt="user" />
            <img src="https://i.pravatar.cc/40?img=17" alt="user" />
          </div>
        </div>
      </div>

      <div className="gallery-card9 normal">
        <div className="tagman">
          <span className="tag1">CULTURAL</span>
        </div>
        <div className="overlay1">
          <h3>Maui By Air The Best Way Around The Island</h3>
          <div className="avatars1">
            <img src="https://i.pravatar.cc/40?img=18" alt="user" />
            <img src="https://i.pravatar.cc/40?img=19" alt="user" />
          </div>
        </div>
      </div>

      <div className="gallery-card10 normal dark">
        <div className="tagman">
          <span className="tag1">SPORTS</span>
        </div>
        <div className="overlay1">
          <p>
            Man cannot discover new oceans unless he has the courage to lose
            sight of the shore.
          </p>
          <div className="avatars1">
            <img src="https://i.pravatar.cc/40?img=20" alt="user" />
            <img src="https://i.pravatar.cc/40?img=21" alt="user" />
          </div>
        </div>
      </div>
    </div>
    <div className="gallery-parallex-section">

    </div>

      <LuxuryHotelFooter />
    </>
  );
};

export default Gallery;
