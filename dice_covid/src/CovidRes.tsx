import React, { useEffect, useState } from 'react';
import { getResponse, CovidData } from './Covid';
import axios from 'axios';
import './CovidRes.css'

const countries = [
  'China', 'USA', 'Italy', 'Spain', 'Germany', 'France', 'Iran', 'UK', 
  'Colombia', 'Chile', 'Japan', 'South Korea', 'Indonesia'
];
//Sri Lanka, Bangladesh, China, and Nepal.
const top5Countries = ['Nepal', 'India', 'China', 'Bangladesh', 'Sri Lanka'];

export const CovidRes = () => {
  const [covidData, setCovidData] = useState<CovidData | null>(null);
  const [selectedCountry, setSelectedCountry] = useState<string>('China');
  const [top5Data, setTop5Data] = useState<CovidData[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await getResponse(selectedCountry);
      setCovidData(response);
    };
    fetchData();
  }, [selectedCountry]);

  useEffect(() => {
    const fetchTop5Data = async () => {
      const responses = await Promise.all(top5Countries.map((country) => getResponse(country)));
      setTop5Data(responses);
    };
    fetchTop5Data();
  }, []);

  return (
    <div className="covid-page" style={{textAlign:"center",marginTop:"40px",marginBottom:"40px",}}>
            <h2 style={{textAlign:"center",marginTop:"40px",color:"red"}}>Vacinated and Affected::Page2&Page1</h2>

      <h1 className="title" style={{textAlign:"center",marginTop:"40px"}}>Covid Data for {covidData?.country}</h1>
      <div className="dropdown-container">
        <label htmlFor="country-select">Select a Country:</label>
        <select id="country-select" value={selectedCountry} onChange={(e) => setSelectedCountry(e.target.value)}>
          {countries.map((country) => (
            <option key={country} value={country}>
              {country}
            </option>
          ))}
        </select>
      </div>
      <div className="data-container">
        <p >Total Cases: {covidData?.cases}</p>
        <p>Total Vaccinated {covidData?.vaccinated}</p>
      </div>
      <hr></hr>
      <h2 style={{textAlign:"center",marginTop:"40px",color:"red"}}>Neighboring Countries:Page3</h2>
      <table>
        <thead>
          <tr>
            <th>Country</th>
            <th>Total Cases</th>
            <th>Total  Deaths</th>
            <th>Total Recovered</th>
          </tr>
        </thead>
        <tbody>
          {top5Data.map((data) => (
            <tr key={data.country}>
              <td>{data.country}</td>
              <td>{data.cases}</td>
              <td>{data.todayDeaths}</td>
              <td>{data.todayRecovered}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
