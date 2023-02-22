import React, { useState, useEffect } from "react";
import { CChart } from "@coreui/react-chartjs";
const url = `https://data-analysis-85r1.onrender.com/api/v1/energy/`;
import axios from "axios";
export default function PieChart() {
  const [data, setData] = useState();
  const [country, setCountry] = useState([]);


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
      const countries = Object.values(data).map((obj) => obj.country);
      setCountry(countries);
      console.log(countries, "new");
    }
  }, [data]);

  const countryArr = country;

  const countCountries = (arr) => {
    return arr.reduce((acc, country) => {
      if (!acc[country]) {
        acc[country] = 1;
      } else {
        acc[country]++;
      }
      return acc;
    }, {});
  };

  const createCountryCountArray = (arr) => {
    const countryCountObj = countCountries(arr);
    return Object.entries(countryCountObj).map(([country, count]) => ({
      [country.toLowerCase()]: count,
    }));
  };

  const countryCountArr = createCountryCountArray(countryArr);
  // console.log(countryCountArr , "hey");

  const data1 = countryCountArr.map((res) => data.push(countryCountArr.keys(data)))
  const te = ['United States of America', 'United States of America', 'United States of America', 'Mexico', 'United States of America', '', '', '', 'Nigeria', 'Lebanon', 'United States of America', 'United States of America', '', '', 'Russia', '', '', '', '', 'Saudi Arabia', 'Angola', '', '', 'United States of America', '', '', 'Egypt', 'United States of America', '', '', '', 'South Africa', 'India', 'Saudi Arabia', 'Ukraine', 'Azerbaijan', '', '', '', 'United States of America', 'United States of America', 'United States of America', 'United States of America', 'United States of America', 'United States of America', 'United States of America', 'United States of America', '', '', 'United States of America',]

 
  
  return (
    <div>
      <CChart
        type="doughnut"
        data={{
          labels: te,
          datasets: [
            {
              backgroundColor: [
                "#FF6633", "#FFB399", "#FF33FF", "#FFFF99", "#00B3E6", 
                "#E6B333", "#3366E6", "#999966", "#99FF99", "#B34D4D",
                "#80B300", "#809900", "#E6B3B3", "#6680B3", "#66991A", 
                "#FF99E6", "#CCFF1A", "#FF1A66", "#E6331A", "#33FFCC",
                "#66994D", "#B366CC", "#4D8000", "#B33300", "#CC80CC", 
                "#66664D", "#991AFF", "#E666FF", "#4DB3FF", "#1AB399",
                "#E666B3", "#33991A", "#CC9999", "#B3B31A", "#00E680", 
                "#4D8066", "#809980", "#E6FF80", "#1AFF33", "#999933",
                "#FF3380", "#CCCC00", "#66E64D", "#4D80CC", "#9900B3", 
                "#E64D66", "#4DB380", "#FF4D4D", "#99E6E6", "#6666FF",
                "#E66600", "#4D4DFF", "#00E6E6", "#99FF99", "#FF6666", 
                "#669999", "#FF9933", "#99CCFF", "#FFCCCC", "#3366FF",
                "#B34D4D", "#80B300", "#809900", "#E6B3B3", "#6680B3", 
                "#66991A", "#FF99E6", "#CCFF1A", "#FF1A66", "#E6331A",
                "#33FFCC", "#66994D", "#B366CC", "#4D8000", "#B33300", 
                "#CC80CC", "#66664D", "#991AFF", "#E666FF", "#4DB3FF",
                "#1AB399"],
              data: data1,
            },
          ],
        }}
      />
    </div>
  );
}
