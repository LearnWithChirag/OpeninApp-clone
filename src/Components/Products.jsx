import React, { useState } from 'react';
import Chart from "react-apexcharts";

import '../CSS/Products.css';

const Products = () => {
  const [addPie, setAddPie] = useState({
    options: {},
      series: [44, 55, 41],
      labels: ['A', 'B', 'C']
  })

  return (
    <div className='products'>
        <div className="header">
            <p>
                Top Products
            </p>
            <p>
                May - June 2021
            </p>
        </div>  
        <div className="pie-chart">
        <Chart options={addPie.options} series={addPie.series} type="donut" height="200"/>
        </div>  
    </div>
  )
}

export default Products;