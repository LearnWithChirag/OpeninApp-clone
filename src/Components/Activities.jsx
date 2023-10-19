import {useState} from 'react';
import Chart from "react-apexcharts";
import '../CSS/Activities.css';

const Activities = () => {
  const [addBar, setAddBar] = useState(
    {
      options: {
        chart: {
          id: "basic-bar"
        },
        xaxis: {
          categories: [1991, 1992, 1993, 1994]
        }
      },
      series: [
        {
          name: "series-1",
          data: [30, 40, 45, 50]
        },
        {
          name: "series-2",
          data: [50, 49, 60, 22]
        }
      ]
    }
  );
  return (
    <div className='activities'>
        <div className="header">Activities</div>
        <div className="context">
          <p>May - June 2021</p>
          {/* <ul>
            <li>Guest</li>
            <li>User</li>
          </ul> */}
        </div>
        <div className="chart">
        <Chart
              options={addBar.options}
              series={addBar.series}
              type="bar"
              // width="850"
              height="250"
            />
        </div>
    </div>
  )
}

export default Activities;