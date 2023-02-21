import React, { useEffect, useState } from "react";
import { CChart } from "@coreui/react-chartjs";
const url = `https://data-analysis-85r1.onrender.com/api/v1/energy/`;
import axios from "axios";
console.log(url);
export default function Chartis() {
  const [data, setData] = useState({});
  const [yearIntensityData, setYearIntensityData] = useState([]);
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
  useEffect(() => {
    if (data && data.length > 0) {
      const intensityData = data.map((item) => (
        item.intensity
      ));
      setYearIntensityData(intensityData);
    }
  }, [data]);
  
  console.log(yearIntensityData)

  return (
    <div>
      <CChart
        type="line"
        data={{
          labels: [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
          ],
          datasets: [
            {
              label: "My First dataset",
              backgroundColor: "rgba(220, 220, 220, 0.2)",
              borderColor: "rgba(110, 110, 110, 1)",
              pointBackgroundColor: "rgba(220, 220, 220, 1)",
              pointBorderColor: "#fff",
              data: yearIntensityData,
            }
          ],
        }}
      />
    </div>
  );
}
