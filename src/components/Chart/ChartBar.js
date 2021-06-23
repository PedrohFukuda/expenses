import "./ChartBar.css";

const CharBar = (props) => {
  let fillPercentage = "0%";

  if (props.maxValue > 0) {
    fillPercentage = Math.round((props.value / props.maxValue) * 100) + "%";
  }
  return (
    <div className="chart-bar">
      <div className="chart-bar__inner">
        <div
          className="chart-bar__fill"
          style={{ height: fillPercentage }}
        ></div>
      </div>
      <div className="chart-bar__label">{props.label}</div>
    </div>
  );
};

export default CharBar;
