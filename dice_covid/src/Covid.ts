// import axios from "axios";

// export interface CovidTimeline {
//     cases: { [date: string]: number };
//     deaths: { [date: string]: number };
//     recovered: { [date: string]: number };
// }

// export interface DiseaseDetails {
//     country: string;
//     timeline: CovidTimeline;
// }

// export const getDiseaseData = async (location: string): Promise<DiseaseDetails> => {
//     console.log(location)
//     const response = await axios.get("https://disease.sh/v3/covid-19/historical/",{
//         params:{
//             location:location,
//             lastdays:30
//         }
// });
//     console.log(response.data)
//     return response.data;
// };

// import axios from 'axios';

// export interface CovidData {
//   cases: number;
//   todayDeaths: number;
//   todayRecovered: number;
//   country: string;
// }

// export const getResponse = async (country: string): Promise<CovidData> => {
//   const res = await axios.get("https://disease.sh/v3/covid-19/countries/",{
//     params:
//     {
//         country:country
//     }
//   }
//   );
//   const data = res.data;
//   return {
//     cases: data.cases,
//     todayDeaths: data.todayDeaths,
//     todayRecovered: data.todayRecovered,
//     country: data.country,
//   };
// }

import axios from 'axios';

export interface CovidData {
  cases: number;
  todayDeaths: number;
  todayRecovered: number;
  country: string;
  vaccinated:number;
}

export const getResponse = async (country: string): Promise<CovidData> => {
  const res = await axios.get(`https://disease.sh/v3/covid-19/countries/${country}`);
  const data = res.data;
  return {
    cases: data.cases,
    todayDeaths: data.deaths,
    todayRecovered: data.recovered,
    country: data.country,
    vaccinated:data.active
  };
}
