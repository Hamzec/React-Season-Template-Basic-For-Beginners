import React from "react";
import "./SeasonDisplay.css";

const seasonconfig = {
  Summer: {
    text: "Lets Hit The Beach",
    iconName: "sun"
  },
  Winter: {
    text: "Its Winter",
    iconName: "snowflake"
  }
};

const getseason = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? "Summer" : "Winter";
  } else {
    return lat > 0 ? "Winter" : "Summer";
  }
};

const SeasonDisplay = props => {
  const season = getseason(props.lat, new Date().getMonth());
  const { text, iconName } = seasonconfig[season];

  return (
    <div className={`season-display ${season}`}>
      <i className={`icon-left massive ${iconName} icon`} />
      <h1>{text}</h1>
      <i className={`icon-right massive ${iconName} icon`} />
    </div>
  );
};

export default SeasonDisplay;
