import React, { useEffect } from "react";
import "./App.css";
import WorldMap from "react-svg-worldmap";

function Nederland() {
  useEffect(() => {
    fethcen();
  }, []);

  const fethcen = async () => {
    const dataApi = await fetch(
      "https://countriesnow.space/api/v0.1/countries/"
    );

    const apifetch = await dataApi.json();
    const items = apifetch.data[150].cities;

    let steden = [];

    for (let i = 0; i < items.length; i++) {
      steden.push(items[i]);
    }

    console.log(steden);

    var legenaam = "";
    for (var x = 0; x < steden.length; x++) {
      legenaam +=
        "<li><a href='https://nl.wikipedia.org/wiki/" +
        steden[x] +
        "'>" +
        "<i class='fas fa-city'></i>" +
        " " +
        steden[x] +
        "</a></li>";
    }
    document.querySelector(".plaatsenLijst").innerHTML = legenaam;
  };

  return (
    <div className='inhoud'>
      <h2>Alle plaatsen in Nederland</h2>
      <ul className='plaatsenLijst'></ul>
    </div>
  );
}
export default Nederland;
