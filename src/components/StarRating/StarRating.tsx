

const StarRating = ({ rating = 0, color = "gold", size = 24 }) => {
  return (
    <div style={{ display: "flex", gap: "4px" }}>
      {[...Array(rating)].map((_, i) => (
        <svg
          key={i}
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill={color}
        >
          <path d="M12 .587l3.668 7.431 8.2 1.193-5.934 5.787 
                   1.401 8.172L12 18.896l-7.335 3.856 
                   1.401-8.172-5.934-5.787 8.2-1.193z" />
        </svg>
      ))}
    </div>
  );
};

export default StarRating;
