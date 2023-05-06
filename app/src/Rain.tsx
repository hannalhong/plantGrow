import React from "react";
import rainVid from "./assets/plantgrowRain.gif";

export default function Rain() {
  const style: React.CSSProperties = {
    height: 700,
    width: "auto",
    position: "absolute",
  };
  return <img src={rainVid} alt="rain" style={style} />;
}
