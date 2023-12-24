import React, { useState } from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import NavBar from "../components/Navigation";
import Faeria from "./games/Faeria";
import Roguebook from "./games/Roguebook";
import Scrolls from "./games/Scrolls";

function GameTabs() {
  const [currentGame, setCurrentGame] = useState("");
  const handleGameChange = (game) => setCurrentGame(game);

  return (
    <>
      <NavBar />
      <Tabs
        defaultActiveKey="profile"
        id="justify-tab-example"
        className="mb-3"
        justify
      >
        <Tab
          eventKey="faeria"
          title="Faeria"
          onClick={() => handleGameChange("Faeria")}
        >
          <Faeria />
        </Tab>
        <Tab
          eventKey="roguebook"
          title="Roguebook"
          onClick={() => handleGameChange("Roguebook")}
        >
          <Roguebook />
        </Tab>
        <Tab
          eventKey="scrolls"
          title="Scrolls"
          onClick={() => handleGameChange("Scrolls")}
        >
          <Scrolls />
        </Tab>
      </Tabs>
    </>
  );
}

export default GameTabs;
