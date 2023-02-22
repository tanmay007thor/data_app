import React, { useState, useEffect } from "react";
import { CChart } from "@coreui/react-chartjs";
import axios from "axios";

const url = `https://data-analysis-85r1.onrender.com/api/v1/energy/`;

export default function PolarAreaChart() {
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
  type="polarArea"
  data={{
    labels: cnt,
    datasets: [
      {
        data: tagdata,
        backgroundColor: ['#FF6384', '#4BC0C0', '#FFCE56', '#E7E9ED', '#36A2EB'],
      },
    ],
  }}
/>
    </div>
  )
}
