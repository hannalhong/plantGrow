import React from "react";
import logo from "./logo.svg";
import "./App.css";
import PlantPage from "./PlantPage";
import registerAllIcons from "./registerIcons";

registerAllIcons();

function App() {
  return <PlantPage />;
}

export default App;
