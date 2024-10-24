import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import "./Countries.css"

import axiosInstance from '../../axios/axiosInstance';

const Countries = () => {
    const [countries, setCountries] = useState(null);

    useEffect(() => {
        async function search() {
            const findCountries = await axiosInstance.get('/countries');
            setCountries(findCountries.data);
        }
        search()
    }, [])

    return (
        <div className='countries'>
            {
                countries && countries.map(({ name, countryCode }) => {
                    return <ul key={name} style={{ textAlign: 'center' }}>
                        <li key={name}>
                            <Link to={`info/${countryCode}`}>{name}</Link>
                        </li>
                    </ul>
                })
            }
        </div>
    )
}

export default Countries