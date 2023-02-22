import React , {useState , useEffect} from 'react'
import { CChart } from '@coreui/react-chartjs'
const url = `https://data-analysis-85r1.onrender.com/api/v1/energy/`;

import axios from 'axios';
export default function RadarChart() {
  const [data, setData] = useState();
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    if (data) {
      const countries = Object.values(data).map((obj) => obj.country);
      setCountries(countries.filter(Boolean));
    }
  }, [data]);

  const countCountries = (arr) => {
    return arr.reduce((count, country) => {
      count[country] = (count[country] || 0) + 1;
      return count;
    }, {});
  };

  const countryCount = countCountries(countries);

  const cnt = Object.keys(countryCount);
  const tagdata = Object.values(countryCount);
  return (
    <div>
        <CChart 
  type="radar"
  data={{
    labels: [1, 2],
    datasets: [
      {
        label: 'My First dataset',
        backgroundColor: 'rgba(220, 220, 220, 0.2)',
        borderColor: 'rgba(220, 220, 220, 1)',
        pointBackgroundColor: 'rgba(220, 220, 220, 1)',
        pointBorderColor: '#fff',
        pointHighlightFill: '#fff',
        pointHighlightStroke: 'rgba(220, 220, 220, 1)',
        data: [65, 59, 90, 81, 56, 55, 40],
      },
      {
        label: 'My Second dataset',
        backgroundColor: 'rgba(151, 187, 205, 0.2)',
        borderColor: 'rgba(151, 187, 205, 1)',
        pointBackgroundColor: 'rgba(151, 187, 205, 1)',
        pointBorderColor: '#fff',
        pointHighlightFill: '#fff',
        pointHighlightStroke: 'rgba(151, 187, 205, 1)',
        data: [28, 48, 40, 19, 96, 27, 100],
      },
    ],
  }}
/>
    </div>
  )
}
