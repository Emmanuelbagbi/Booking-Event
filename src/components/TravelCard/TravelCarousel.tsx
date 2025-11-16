import { IoMicOutline } from "react-icons/io5";
import {  FaUmbrellaBeach, FaPalette, FaHeartbeat, FaGamepad, FaBriefcase, FaUtensils } from "react-icons/fa";
import "./TravelCard.css";
import  MapIcon  from "./MapIcon";

const categories = [
  { name: "Music", icon: <IoMicOutline /> },
  { name: "Nightlife", icon: <MapIcon width={32} height={32} style={{ color: "red" }} /> },
  { name: "Holidays", icon: <FaUmbrellaBeach /> },
  { name: "Visual Arts", icon: <FaPalette /> },
  { name: "Health", icon: <FaHeartbeat /> },
  { name: "Hobbies", icon: <FaGamepad /> },
  { name: "Business", icon: <FaBriefcase /> },
  { name: "Food & Drink", icon: <FaUtensils /> },
];

const Categories = () => {
  return (
    <div className="categories-container">
      {categories.map((cat, index) => (
        <div className="category-card" key={index}>
          <div className="icon-wrapper">{cat.icon}</div>
          <p>{cat.name}</p>
        </div>
      ))}
    </div>
  );
};

export default Categories;
