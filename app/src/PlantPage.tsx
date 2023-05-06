import React from "react";
import Environment from "./Environment";
import PlantMenu from "./PlantMenu";
import Plant from "./Plant";
import { TextField } from "@fluentui/react/lib/TextField";
import { calculateNewValue } from "@testing-library/user-event/dist/utils";

export enum Weather {
  Clear,
  Rainy,
  Sunny,
  Lightning,
  Fertilizing,
}

export default function PlantPage() {
  const [environmentState, setEnvironmentState] = React.useState(Weather.Clear);

  const changeEnvironment = (
    currentEnvironment: Weather,
    weatherClicked: Weather
  ) => {
    if (currentEnvironment === weatherClicked) {
      setEnvironmentState(Weather.Clear);
    } else {
      setEnvironmentState(weatherClicked);
    }
  };

  //const [isRaining, setIsRaining] = React.useState(false);

  const onRainClicked = () => {
    changeEnvironment(environmentState, Weather.Rainy);
  };

  //const [isFertilizing, setIsFertilizing] = React.useState(false);

  const onFertilizerClicked = () => {
    changeEnvironment(environmentState, Weather.Fertilizing);
  };

  //const [isSunny, setIsSunny] = React.useState(false);

  const onSunClicked = () => {
    changeEnvironment(environmentState, Weather.Sunny);
  };

  //const [isDead, setIsDead] = React.useState(false);

  const onKillClicked = () => {
    changeEnvironment(environmentState, Weather.Lightning);
  };

  const textStyles: any = {
    root: {
      width: 160,
      position: "absolute",
      top: 24,
      left: "calc(50% - 80px)",
    },
  };

  return (
    <>
      <TextField styles={textStyles} />
      <Environment environmentState={environmentState} />
      <PlantMenu
        onRainClicked={onRainClicked}
        onFertilizerClicked={onFertilizerClicked}
        onSunClicked={onSunClicked}
        onKillClicked={onKillClicked}
      />
      <Plant environmentState={environmentState} />
    </>
  );
}
