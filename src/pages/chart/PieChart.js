import React ,{useState , useEffect }from 'react'
import { CChart } from '@coreui/react-chartjs'
const url = `https://data-analysis-85r1.onrender.com/api/v1/energy/`;
import axios from "axios";
export default function PieChart() {

  const [data, setData] = useState({});
  const [sector, setSector] = useState([]);

  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        setData(response?.data);
        // console.log(response?.data)
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    if (data && data.length > 0) {
      const intensityData = data.map((item) => (
        item.sector
      ));
      setSector(sector);
    }
  }, [data]);

  return (
    <div>
        <CChart
  type="doughnut"
  data={{
    labels: ['VueJs', 'EmberJs', 'ReactJs', 'AngularJs'],
    datasets: [
      {
        backgroundColor: ['#41B883', '#E46651', '#00D8FF', '#DD1B16'],
        data: [40, 20, 80, 10],
      },
    ],
  }}
/>
    </div>
  )
}
