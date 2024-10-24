import React from 'react'
import Header from './templates/Header/Header'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Countries from './templates/countries/Countries'
import Info from './templates/info/Info';

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Countries />} />
        <Route path='/info/:countryCode' element={<Info />} />
      </Routes>

    </Router>
  )
}

export default App