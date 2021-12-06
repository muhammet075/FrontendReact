import React from "react";
import "./App.css";

function Svg() {
  return (
    <div className='inhoud'>
      <h2>SVG</h2>
      <div className='svg-inhoud'>
        <div class='svg1'>
          <svg height='210' width='400'>
            <circle cx='150' cy='105' r='80' fill='#ffff' />
            <circle cx='170' cy='105' r='64' fill='#E30A17' />
            <polygon
              cx='50'
              cy='50'
              r='40'
              points='50,5 20,99 95,39 5,39 80,99'
            />
          </svg>
        </div>

        <div class='svg2'>
          <svg width='400' height='210'>
            <rect width='400' height='70'></rect>
            <rect width='400' height='70'></rect>
            <rect width='400' height='70'></rect>
          </svg>
        </div>

        <div class='svg3'>
          <svg width='400' height='210'>
            <rect width='400' height='70'></rect>
            <circle cx='170' cy='104' r='33' fill='white' />
            <circle cx='181' cy='104' r='27' fill='red' />
            <polygon
              class='ster1'
              cx='50'
              cy='50'
              r='40'
              points='25,2.5 10,49.5 47.5,19.5 2.5,19.5 40,49.5'
              stroke='100'
            />
            <polygon
              class='ster2'
              cx='50'
              cy='50'
              r='40'
              points='25,2.5 10,49.5 47.5,19.5 2.5,19.5 40,49.5'
              stroke='100'
            />
            <rect width='400' height='70'></rect>
          </svg>
        </div>

        <div class='svg4'>
          <svg height='210' width='400'>
            <circle cx='200' cy='105' r='80' />
          </svg>
        </div>

        <div class='svg5'>
          <svg height='210' width='400'>
            <rect></rect>
            <rect></rect>
          </svg>
        </div>

        <div class='svg6'>
          <svg height='210' width='400'>
            <rect></rect>
            <rect></rect>
          </svg>
        </div>
      </div>
    </div>
  );
}
export default Svg;
