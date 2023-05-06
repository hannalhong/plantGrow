import React from "react";
import { isPropertySignature } from "typescript";
import Rain from "./Rain";
import RainButton from "./RainButton";
import FertilizerButton from "./FertilizerButton";
import SunButton from "./SunButton";
import KillButton from "./KillButton";
import { Stack } from "@fluentui/react";

export default function PlantMenu(props: {
  onRainClicked: () => void;
  onFertilizerClicked: () => void;
  onSunClicked: () => void;
  onKillClicked: () => void;
}) {
  const styles = {
    bottom: 70,
    position: "absolute",
    width: "100%",
    zIndex: 5,
  } as React.CSSProperties;

  const hillParentStyles = {
    width: "100vw",
    overflow: "hidden",
    position: "absolute",
    bottom: "0",
    height: "35%",
  } as React.CSSProperties;

  const hillStyles = {
    background: "linear-gradient(#D0D7AA, #F8F8EB)",
    width: "160%",
    height: "100%",
    position: "relative",
    borderRadius: "50%",
    border: "solid 3px #CCD1AE",
    marginLeft: "-30%",
    zIndex: -1,
  } as React.CSSProperties;

  return (
    <>
      <Stack
        horizontal
        horizontalAlign="space-evenly"
        verticalAlign="center"
        style={styles}
      >
        <RainButton onRainClicked={props.onRainClicked} />
        <FertilizerButton onFertilizerClicked={props.onFertilizerClicked} />
        <SunButton onSunClicked={props.onSunClicked} />
        <KillButton onKillClicked={props.onKillClicked} />
      </Stack>
      <div style={hillParentStyles}>
        <div style={hillStyles}></div>
      </div>
    </>
  );
}
