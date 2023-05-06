import React from "react";
import { Weather } from "./PlantPage";
import grow0 from "./assets/plant1_noBG.gif";
import grow1 from "./assets/plant1_noBG.gif";
import grow2 from "./assets/plantGrow2.gif";
import grow3 from "./assets/plantGrow3.gif";
import grow4 from "./assets/plantGrow4.gif";
import grow5 from "./assets/plantGrow5.gif";
import grow6 from "./assets/plantGrow6.gif";
import plantLightning from "./assets/plantLightning.gif";

export default function Plant(props: { environmentState: Weather }) {
  const [growth, setGrowth] = React.useState(0);

  React.useEffect(() => {
    switch (props.environmentState) {
      case Weather.Rainy:
      case Weather.Sunny:
      case Weather.Fertilizing:
        if (growth < 6) {
          setGrowth(growth + 1); //only +1 if under max
          break;
        } else {
          setGrowth(growth);
          break;
        }

      case Weather.Lightning:
        setGrowth(0);
        break;
    }
  }, [props.environmentState]);

  const getPlantImage = () => {
    if (props.environmentState === Weather.Lightning) {
      //return gif of lightning
      return plantLightning;
    }
    if (growth === 0) {
      //return static image of plant
      return grow0;
    }
    if (growth === 1) {
      //return gif of growth 1
      return grow1;
    }
    if (growth === 2) {
      //return gif of growth 2
      return grow2;
    }
    if (growth === 3) {
      //return gif of growth 3
      return grow3;
    }
    if (growth === 4) {
      //return gif of growth 4
      return grow4;
    }
    if (growth === 5) {
      //return gif of growth 5
      return grow5;
    }
    if (growth === 6) {
      //return gif of growth 6
      return grow6;
    }
  };

  const plantImage = getPlantImage();
  const style: React.CSSProperties = {
    height: 700,
    width: "auto",
    position: "absolute",
  };
  return (
    <>
      {growth}
      <img src={plantImage} alt="growth state" style={style} />
    </>
  );
}
