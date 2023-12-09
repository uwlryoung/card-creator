import React from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import NavBar from '../components/NavBar';
import Faeria from "./games/Faeria";
import Roguebook from "./games/Roguebook";
import Scrolls from "./games/Scrolls";

function GameTabs({ currentGame, handleGameChange }) {
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
          Tab content for Faeria
          <Faeria />
        </Tab>
        <Tab
          eventKey="roguebook"
          title="Roguebook"
          onClick={() => handleGameChange("Roguebook")}
        >
          Tab content for Roguebook
          <Roguebook />
        </Tab>
        <Tab
          eventKey="scrolls"
          title="Scrolls"
          onClick={() => handleGameChange("Scrolls")}
        >
          Tab content for Scrolls
          <Scrolls />
        </Tab>
      </Tabs>
    </>
  );
}

export default GameTabs;

// Below is a possible icon to use for the page, but have to give credit on the page somewhere.
// {/* <a href="https://www.flaticon.com/free-icons/poker" title="poker icons">Poker icons created by Freepik - Flaticon</a> */}
