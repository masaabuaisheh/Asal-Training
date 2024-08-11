import React, { useState } from 'react';
import Link from 'next/link';
import Select from 'react-select';

// Define the countries object
const countries = {
  Palestine: "PL",
  France: "FR",
  Germany: "DE",
  Italy: "IT",
  Spain: "ES",
  United_Kingdom: "GB",
  United_States: "US",
  Canada: "CA",
  Australia: "AU",
  Brazil: "BR",
  Mexico: "MX",
  Japan: "JP",
  South_Korea: "KR",
  China: "CN",
  India: "IN",
  Russia: "RU",
  South_Africa: "ZA",
  Egypt: "EG",
  Turkey: "TR",
  Saudi_Arabia: "SA"
};

// Convert the countries object to an array of { value, label } objects
const countriesOptions = Object.entries(countries).map(([label, value]) => ({
  value,
  label: label.replace(/_/g,' ')
}));

function DropdownComponent() {
  const [selectedCountries, setSelectedCountries] = useState(null);
  const [message, setMessage] = useState('');

  const handleChange = (selectedOption: any) => {
    setSelectedCountries(selectedOption);
    setMessage('Countries have been selected');
  };

  const removeChoise = () => {
    if(selectedCountries === null){
      setMessage('No countries selected');
    }
    else {
    setSelectedCountries(null);
    setMessage('Countries selection cleared');
    }
  };

  return (
    <div className='mainDropDown'>
      <Link className='back-selectPage' href="/">Back</Link>
      <div className='main-content-Searchable'>
        <h2>Searchable Dropdown</h2>
        <Select
          className='selectCountry'
          options={countriesOptions} 
          value={selectedCountries} 
          onChange={handleChange} 
          placeholder='Select a country...'
        />
         {message && <p className='message-appear'>{message}</p>}
        <button 
        className='clear-choise'
        onClick={()=>{removeChoise()}}
        >Remove a country</button>
       
      </div>
    </div>
  );
}

export default DropdownComponent;
