import './SeasonDisplay.css';
import React from "react";
import { ReactDOM } from "react-dom";

const SeasonConfig = {
    Summer:{
        text: "It's very hot. Let's go to the beach!",
        iconName: "sun"
    },
    Winter:{
        text: "Burr, it's very cold. Burn some woods!",
        iconName: "snowflake"
    }
};

const getSeason = (lat, month) =>
{
if(month>2 && month <9)
return lat > 0 ? 'Summer' : 'Winter';
else
return lat < 0 ? 'Winter' : 'Summer';
}


const SeasonDisplay = (props) => {

    const season = getSeason(props.lat, new Date().getMonth());
    const {text, iconName} = SeasonConfig[season];
    return (
        <div className={`content ${season}`}>
        <i className={`icon-left massive ${iconName} icon`}></i>
        <h2>{text}</h2>
        <i className={`icon-right massive ${iconName} icon`}></i>
        </div>
    );
}

export default SeasonDisplay;