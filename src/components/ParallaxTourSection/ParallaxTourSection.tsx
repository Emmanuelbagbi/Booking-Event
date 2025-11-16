import './ParallaxTourSection.css';

const PromoSection: React.FC = () => {
  return (
    <section className="section">
  <div className="promo-content">
    <p className="sale">SPECIAL OFFER</p>
    <h1 className="discount232">
      Tickets <span className="badge232">20% Off</span>
    </h1>
    <p className="description373">
      Don’t miss your chance to be part of unforgettable moments. 
      Grab your tickets now and enjoy exclusive discounts on our upcoming events.
    </p>

    <div className="buttons">
      <button className="btn btn-primary">View Events</button>
      <button className="btn btn-outline">Book Now</button>
    </div>
  </div>
</section>

  );
};

export default PromoSection;
