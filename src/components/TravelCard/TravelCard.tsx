import React from "react";
import "./TravelCard.css";
import TravelEightIcon from "./TravelEightIcon";

interface TravelCardProps {
  bgColor: string;
  badgeText: string;
  title: string;
  image: string;
  code?: string;
}

const TravelCard: React.FC<TravelCardProps> = ({ bgColor, badgeText, title, image, code }) => {
  return (
    <div className="travel-card" style={{ backgroundColor: bgColor }}>
      <div className="card-content">
        <span className="badge" style={{color: bgColor}}>{badgeText}</span>
        <h2 className="title">{title}</h2>
        <span className="footer"> 
            <TravelEightIcon></TravelEightIcon>
            oppa travel</span>
      </div>

      <div className="card-image">
        <img src={image} alt="destination" />
      </div>

      {code && <span className="promo">{code}</span>}
    </div>
  );
};

export default TravelCard;
