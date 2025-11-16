import React, { useState, useEffect } from 'react';
import './CitySlideshow.css';



interface Section {
  id: number;
  title: string;
  content: string;
  bgImage: string;
}

const SatelliteSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [isContainerInactive, setIsContainerInactive] = useState(true);

  const sections: Section[] = [
    {
        id: 1,
        title: "Weddings",
        content: "Plan your dream wedding with our expert team, offering personalized services for ceremonies, receptions, and more.",
        bgImage: 'https://cdn.prod.website-files.com/65a509af23a76722fd76c210/678f74b1bfc533f48f1d815b_pexels-olly-842548.avif',
    },
    {
        id: 2,
        title: "Corporate Events",
        content: "Organize seamless corporate events, from conferences to team-building retreats, with professional planning and execution.",
        bgImage: 'https://images.dzzn8wni.ext.evbdomains.com/marketing/landingpages/assets/2025/rebrand/organizer/a--s-img-hero-00.webp'
    },
    {
        id: 3,
        title: "Music Festivals",
        content: "Create unforgettable music festivals with our expertise in logistics, artist coordination, and crowd management.",
        bgImage: 'https://images.dzzn8wni.ext.evbdomains.com/marketing/landingpages/assets/2025/rebrand/l/music/a--hero-img-00.webp'
    },
    {
        id: 4,
        title: "Social Gatherings",
        content: "Host memorable social events like birthdays, anniversaries, or galas with our tailored planning services.",
        bgImage: 'https://www.eventbrite.com/blog/wp-content/uploads/2024/07/How-to-Create-a-Snapchat-Filter-for-an-Event_-Step-by-Step-01.avif'
    },
    {
        id: 5,
        title: "Community Events",
        content: "Bring communities together with engaging events, from charity fundraisers to local festivals, planned to perfection.",
        bgImage: 'https://www.eventbrite.com/blog/wp-content/uploads/2025/08/pexels-rdne-6224722-768x512.avif'
    }
];

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsContainerInactive(false);
    }, 200);

    return () => clearTimeout(timer);
  }, []);

  const handleSectionClick = (index: number) => {
    if (activeIndex === index) return;
    setActiveIndex(index);
  };

  const handleCloseClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    setActiveIndex(null);
  };

  return (
    <div className="satellite-container">
      <div className={`cont ${isContainerInactive ? 's--inactive' : ''} ${activeIndex !== null ? 's--el-active' : ''}`}>
        <div className="cont__inner">
          {sections.map((section, index) => (
            <div 
              key={section.id}
              className={`el ${activeIndex === index ? 's--active' : ''}`}
              onClick={() => handleSectionClick(index)}
              style={{ '--i': index } as React.CSSProperties}
            >
              <div className="el__overflow">
                <div className="el__inner">
                  <div 
                    className="el__bg"
                    style={{ backgroundImage: `url(${section.bgImage})` }}
                  ></div>
                  <div className="el__preview-cont">
                    <h2 className="el__heading">{section.title}</h2>
                  </div>
                  <div className="el__content">
                    <div className="el__text">{section.content}</div>
                    <div className="el__close-btn" onClick={handleCloseClick}></div>
                  </div>
                </div>
              </div>
              <div className="el__index">
                <div className="el__index-back">{section.id}</div>
                <div className="el__index-front">
                  <div className="el__index-overlay" data-index={section.id}>
                    {section.id}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <a href="https://dribbble.com/shots/2802024-Satellite-Website-Prototype" target="_blank" rel="noopener noreferrer" className="icon-link">
        <img src="http://icons.iconarchive.com/icons/uiconstock/socialmedia/256/Dribbble-icon.png" alt="Dribbble" />
      </a>
      <a href="https://twitter.com/NikolayTalanov" target="_blank" rel="noopener noreferrer" className="icon-link icon-link--twitter">
        <img src="https://cdn1.iconfinder.com/data/icons/logotypes/32/twitter-128.png" alt="Twitter" />
      </a>
    </div>
  );
};

export default SatelliteSection;