import React from "react";

const PlayButton = ({ movieName }) => {
  function KALU() {
    alert("bhago");
  }
  return <button onClick={KALU}>{movieName}</button>;
};

export default PlayButton;
