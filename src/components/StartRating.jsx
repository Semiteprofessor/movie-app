const StartRating = ({ maxRating }) => {
  const containerStyle = {
    display: "flex",
    alignItems: "center",
    gap: "16px",
  };

  const starContainerStyle = {
    display: "flex",
    gap: "4px",
  };

  const textStyle = {
    lineHeight: "1",
    margin: "0",
  };
  return (
    <div style={containerStyle}>
      <div style={starContainerStyle}>
        {Array.from({ length: maxRating }, (_, i) => (
          <span>S{i + 1}</span>
        ))}
      </div>
      <p style={textStyle}>10</p>
    </div>
  );
};

const Star = () => {
  return (
    <span>
      <svg
        xmlns="http://www.w3.org/2000//svg"
        viewBox="0 0 20 20"
        fill="#000"
        stroke="#000                                                                                                                                     "
      >
        <path></path>
      </svg>
    </span>
  );
};

export default StartRating;
