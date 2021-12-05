import React, { useState, useEffect } from "react";
import "./App.css";
import { Link } from "react-router-dom";

function Nederland() {
  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    const data = await fetch("https://countriesnow.space/api/v0.1/countries/");

    const items = await data.json();
    const nederlandseSteden = items.data[213];

    console.log(nederlandseSteden.cities);
  };

  return (
    <div className='inhoud'>
      <h2>Nederland</h2>
    </div>
  );
}

export default Nederland;
