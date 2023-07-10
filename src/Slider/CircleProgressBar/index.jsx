const CircleProgressBar = ({ percentage, circleWidth }) => {
  const radius = 62;
  const dashArray = 74 * Math.PI * 2;
  const dashOffset = dashArray - (dashArray * percentage * 10) / 100;
  return (
    <div className="sliderDiv">
      <svg
        width={circleWidth}
        height={circleWidth}
        // viewBox={`${circleWidth} ${circleWidth}`}
      >
        <circle
          cx={circleWidth / 2}
          cy={circleWidth / 2}
          strokeWidth="2px"
          r={98}
          className="circle-dashed"
        />
        <circle
          cx={circleWidth / 2}
          cy={circleWidth / 2}
          strokeWidth="5px"
          r={74}
          className="circle-progress"
          style={{
            strokeDasharray: dashArray,
            strokeDashoffset: dashOffset,
          }}
          transform={`rotate (-90 ${circleWidth / 2} ${circleWidth / 2})`}
        />
        <circle
          cx={circleWidth / 2}
          cy={circleWidth / 2}
          strokeWidth="20px"
          r={radius}
          className="circle-background"
        />
        <text
          x="50%"
          y="50%"
          dy="0.3em"
          textAnchor="middle"
          className="circle-text"
          fill="white"
        >
          {percentage}
        </text>
      </svg>
    </div>
  );
};

export default CircleProgressBar;
