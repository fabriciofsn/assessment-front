import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import "./Info.css";
// import axiosInstance from './axiosInstance';

const Info = () => {
  const { countryCode } = useParams();
  const [countries, setCountries] = useState(null);

  useEffect(() => {
    async function search() {
      const findCountries = await axios.get(`http://localhost:3000/countries/${countryCode}`);

      setCountries(findCountries.data);
    }
    search()
  }, [])

  return (
    <div className='info-container' style={{ textAlign: 'center' }}>
      <h1>Page Info</h1>
      {
        countries && <h2>Country name: {countries.countryName}</h2>
      }
      {countries && <img style={{ maxWidth: '400px' }} src={countries.flag} />}

      <p>Borders:</p>

      {
        countries &&
        countries.borders.map(item => {

          return <ul key={item.commonName}><a href={`/info/${item.countryCode}`} key={item.commonName}>{item.commonName}</a></ul>
        })
      }

      <table border="1">
        <caption>Population Over the Years</caption>
        <thead>
          <tr>
            <th scope="col">Year</th>
            <th scope="col">Population</th>
          </tr>
        </thead>
        <tbody>
          {countries && countries.population.map((item) => (
            <tr key={item.year}>
              <th scope="row">{item.year}</th>
              <td>{item.value.toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>

    </div>
  )
}

export default Info