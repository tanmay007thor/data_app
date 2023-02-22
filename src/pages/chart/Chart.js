import React, { useEffect, useState } from "react";
import { CChart } from "@coreui/react-chartjs";
const url = `https://data-analysis-85r1.onrender.com/api/v1/energy/`;
import axios from "axios";
console.log(url);
export default function Chartis() {
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
        type="line"
        data={{
          labels: country,
          datasets: [
            {
              label: "My First dataset",
              backgroundColor: "rgba(111, 317, 220, 0.2)",
              borderColor: "rgba(110, 110, 110, 1)",
              pointBackgroundColor: "rgba(220, 220, 220, 1)",
              pointBorderColor: "#fff",
              data: intensityData,
            },
          ],
        }}
      />
    </div>
  );
}
