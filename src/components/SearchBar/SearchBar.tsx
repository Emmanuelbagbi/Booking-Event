import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";
import { MdLocationPin } from "react-icons/md";
import "./SearchBar.css";

const ReservationForm: React.FC = () => {
  const [search, setSearch] = useState("");
  const [location, setLocation] = useState("");
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [isFocused, setIsFocused] = useState(false);

  // Mock suggestions data (replace with API call or dynamic data as needed)
  const mockSuggestions = [
    "New York",
    "Los Angeles",
    "Chicago",
    "Houston",
    "Miami",
    "San Francisco",
    "Boston",
  ];

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearch(value);

    // Filter suggestions based on input
    if (value.length > 0) {
      const filteredSuggestions = mockSuggestions.filter((suggestion) =>
        suggestion.toLowerCase().includes(value.toLowerCase())
      );
      setSuggestions(filteredSuggestions);
    } else {
      setSuggestions([]);
    }
  };

  const handleSuggestionClick = (suggestion: string) => {
    setSearch(suggestion);
    setSuggestions([]); // Clear suggestions after selection
    setIsFocused(false); // Hide dropdown
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ search, location });
    setSuggestions([]); // Clear suggestions on submit
  };

  return (
    <div className="reservation-main">
      <form className="reservation-form23" onSubmit={handleSubmit}>
      <div className="search-box">
        <FiSearch className="icon43" />
        <div className="search-input-container">
          <input
            type="text"
            placeholder="Search..."
            value={search}
            onChange={handleSearchChange}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setTimeout(() => setIsFocused(false), 200)} 
          />
          {isFocused && suggestions.length > 0 && (
            <ul className="suggestions-list">
              {suggestions.map((suggestion, index) => (
                <li
                  key={index}
                  className="suggestion-item"
                  onMouseDown={() => handleSuggestionClick(suggestion)} 
                >
                  {suggestion}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      <div className="location-box">
        <MdLocationPin className="icon43" />
        <input
          type="text"
          placeholder="Choose a location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
      </div>

      <button type="submit" className="search-btn">
        <FiSearch />
      </button>
    </form>
    </div>
  );
};

export default ReservationForm;