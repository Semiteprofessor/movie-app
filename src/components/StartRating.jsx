const StartRating = () => {
  const containerStyle = {
    display: "flex",
    alignItems: "center",
    gap: "16px",
  };
  return (
    <div style={containerStyle}>
      <div>
        {Array.from({ length: 5 }, (_, i) => (
          <span>S{i + 1}</span>
        ))}
      </div>
    </div>
  );
};

export default StartRating;
