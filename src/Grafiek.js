import React, { useEffect } from "react";
import "./App.css";
import * as d3 from "d3";

function Grafiek() {
  useEffect(() => {
    fethcen();
  }, []);

  const fethcen = async () => {
    const data = await fetch(
      "https://countriesnow.space/api/v0.1/countries/population"
    );

    const items = await data.json();

    const nieuwItems = items.data[185].populationCounts;

    let nieuwInwoner = [];
    let nieuwJaar = [];

    for (let i = 30; i < nieuwItems.length; i++) {
      //afronden naar 3 getallen
      var afronden = nieuwItems[i].value.toString().slice(0, -4);
      //een komma toevoegen na de miljoen getal
      var decimalen = afronden.slice(0, 2) + "." + afronden.slice(2);
      //string omzetten naar int
      var nieuwGetal = Number(decimalen);
      //pushen naar nieuwe array
      nieuwInwoner.push(nieuwGetal);

      nieuwJaar.push(nieuwItems[i].year);

      var dataNederland = [];

      //loopen en nieuwe objecten aanmaken voor in de nieuwe array voor d3
      for (var x = 0; x < nieuwInwoner.length; x++) {
        dataNederland[x] = {
          value: nieuwInwoner[x],
          year: nieuwJaar[x],
        };
      }
    }

    //nieuwe arrray met afgeronde inwoners console loggen
    console.log(dataNederland);

    //groottes van de margin width en height definieren
    const margin = { top: 80, bottom: 0, left: 150, right: 0 };
    const width = 1000 - (margin.left - margin.right);
    const height = 1000 - (margin.top - margin.bottom);

    //element selecteren svg aanmaken
    const svg = d3
      .select("#grafiekNL")
      .append("svg")
      .data(dataNederland.sort((a, b) => d3.descending(a.value, b.value)))
      .attr("width", width + (margin.left + margin.right))
      .attr("height", height + (margin.top + margin.bottom));

    // margin toevoege
    const g = svg
      .append("g")
      .attr("transform", `translate(${margin.left},${margin.top})`);

    // x en y schalen
    const xschaal = d3.scaleLinear().range([width - margin.left, margin.right]);

    const yschaal = d3
      .scaleBand()
      .domain([13, 17])
      .paddingInner(0.3)
      .range([margin.bottom, height - margin.top]);

    // axis toevegen en charts en labels
    const xaxis = d3.axisTop().scale(xschaal);
    const g_xaxis = g.append("g").attr("class", "axis");
    const yaxis = d3.axisLeft().scale(yschaal);
    const g_yaxis = g.append("g").attr("class", "axis");

    update(dataNederland);

    function update(new_data) {
      //scales/domeinen updaten
      xschaal.domain([d3.max(new_data, (d) => d.value), 13]);
      yschaal.domain(new_data.map((d) => d.year));

      //axis displayen
      g_xaxis.transition().call(xaxis);
      g_yaxis.transition().call(yaxis);

      // de juiste jaartallen toevoegen aan de juiste inwoner aantal
      const rect = g
        .selectAll("rect")
        .data(new_data, (d) => d.year)
        .join(
          // rect en x toevegen
          (enter) => {
            const rect_enter = enter.append("rect").attr("x", 0);
            return rect_enter;
          }
        );

      // oude en nieuwe elementen enteren
      rect
        .transition()
        .attr("height", yschaal.bandwidth())
        .attr("width", (d) => xschaal(d.value))
        .attr("y", (d) => yschaal(d.year));
      rect.select("title").text((d) => d.year);
    }

    // checkbox
    d3.select("#FilterJaren").on("change", function () {
      const checked = d3.select(this).property("checked");
      if (checked === true) {
        // inwoners onder 16.4 miljoen verdwijnen
        const gefilterd = dataNederland.filter((d) => d.value > 16.4);

        return update(gefilterd);
      }
      update(dataNederland);
      //alle data terug updaten
    });
  };

  return (
    <div className='inhoud'>
      <article id='grafiekNL'>
        <h2>Inwoners Nederland</h2>
        <section className='filter'>
          <label>
            <input type='checkbox' id='FilterJaren' />
            Laatste 10 jaar
          </label>
        </section>
      </article>
    </div>
  );
}

export default Grafiek;
