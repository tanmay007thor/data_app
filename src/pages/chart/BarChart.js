import React , {useState , useEffect} from 'react'
import axios from 'axios';
const url = `https://data-analysis-85r1.onrender.com/api/v1/energy/`;

import { CChart } from '@coreui/react-chartjs'

export default function BarChart() {
  const [data, setData] = useState();
  const [country, setCountry] = useState([]);
  const [intensityData, setIntensityData] = useState([]);

  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        setData(response?.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    if (data) {
      const countries = Object.values(data).map((obj) => obj.sector);
      const intensities = Object.values(data).map((obj) => obj.intensity);
      setCountry(countries);
      setIntensityData(intensities);
    }
  }, [data]);

  return (
    <div>
        <CChart
  type="bar"
  data={{
    labels: country,
    datasets: [
      {
        label: 'GitHub Commits',
        backgroundColor: '#f56978',
        data: intensityData,
      },
    ],
  }}
  labels="months"
/>
    </div>
  )
}
