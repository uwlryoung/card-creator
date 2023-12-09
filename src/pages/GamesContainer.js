// This file is unneeded but keeping for now just in case it may come in handy later

// import React, { useState } from "react";
// import NavBar from '../components/NavBar';
// import GameTabs from "./GameTabs";
// import Faeria from "./games/Faeria";
// import Roguebook from "./games/Roguebook";
// import Scrolls from "./games/Scrolls";

// export default function GamesContainer() {
//   const [currentGame, setCurrentGame] = useState("Faeria");

//   const renderGame = () => {
//     if (currentGame === "Faeria") {
//       return <Faeria />;
//     }

//     if (currentGame === "Roguebook") {
//       return <Roguebook />;
//     }

//     if (currentGame === "Scrolls") {
//       return <Scrolls />;
//     }
//   };
//   const handleGameChange = (game) => setCurrentGame(game);

//   return (
//     <>
//       <NavBar />
//       <GameTabs currentGame={currentGame} handleGameChange={handleGameChange} />
//       {renderGame()}
//     </>
//   )
// }

