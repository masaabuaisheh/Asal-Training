import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { FaBars } from "react-icons/fa6";

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

const countryOptions = Object.entries(countries)
  .map(([label, value]) => ({
    label: label.replace(/_/g, ' '), 
    value
  }))
  .sort((a, b) => a.label.localeCompare(b.label)); 

const DropdownComponent = () => {
  const [search, setSearch] = useState(""); 
  const [drop, setDrop] = useState(false); 
  const [cursor, setCursor] = useState(-1); 
  const [filterData, setFilterData] = useState(countryOptions); 
  const [message, setMessage] = useState(""); 

  const handleKey = (e: any) => {
    if (drop) { 
      if (e.key === "ArrowUp") {
        e.preventDefault(); 
        if (cursor > 0) {
          setCursor(cursor - 1); // Move up in the list
          focusOnElement(cursor - 1); 
        } else {
          setCursor(-1); // Reset cursor if at the top
          focusOnElement(-1); // Focus back on the search input
        }
      } else if (e.key === "ArrowDown") {
        e.preventDefault();
        if (cursor < filterData.length - 1) {
          setCursor(cursor + 1); // Move down in the list
          focusOnElement(cursor + 1);
        } else {
          setCursor(0); // Loop back to the top of the list
          focusOnElement(0);
        }
      } else if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        if (cursor >= 0) {
          selectCountry(cursor); // Select the highlighted country
        }
      } else if (e.key === "Escape") {
        setDrop(false); 
      }
    }
  };

  const selectCountry = (index: number) => {
    const selectedLabel = filterData[index].label;
    setSearch(selectedLabel);
    setMessage("Country selected successfully!");
    setDrop(false); 
    setCursor(-1); 
  };

  const focusOnElement = (index: number) => {
    const elementId = index === -1 ? 'input-search' : `country-${index}`;
    document.getElementById(elementId)?.focus();
  };

  const removeCountryFromSelected = () => {
    if (search) {
      setSearch("");
      setMessage("Selected country removed successfully!");
    } else {
      setMessage("No country selected to remove");
    }
  };

  const toggleDrop = () => {
    setDrop(prevDrop => !prevDrop);
    setTimeout(() => {
      if (drop) {
        document.getElementById('input-search')?.focus();
      }
    }, 0);
  };

   useEffect(() => {
    const handleClickOutside = (e: any) => {
      const dropdown = document.getElementById('dropdown-wrapper');
      const inputSearch = document.getElementById('input-search');
      
      if (dropdown && inputSearch && !dropdown.contains(e.target) && !inputSearch.contains(e.target)) {
        setDrop(false);
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setFilterData(
        countryOptions.filter(({ label }) =>
          label.toLowerCase().includes(search.toLowerCase())
        )
      );
    }, 1000); 
    return () => clearTimeout(timeoutId); 
  }, [search]);

  return (
    <div className='mainDropDown' tabIndex={0} onKeyDown={handleKey}>
      <Link className='back-selectPage' href="/">Back</Link>
      <div className='main-content-Searchable'>
        <h2>Searchable Dropdown</h2>
        <div 
          id='dropdown-wrapper'
          className='country_data'
          onClick={toggleDrop}
        >
          <div className="search">
            <input
              id='input-search'
              type='text'
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder='Search for countries...'
            />
            <span>
              <FaBars
                className={`icon-transition ${drop ? '' : 'icon-rotate'}`}
                style={{ fontSize: "20px", color: 'GrayText' }}
              />
            </span>
          </div>
          {drop && (
            <div className='country'>
              {filterData.map(({ label, value }, index) => (
                <div
                  className={`countryValue ${cursor === index ? 'active' : ''}`}
                  key={value}
                  tabIndex={0}
                  id={`country-${index}`}
                  onClick={() => selectCountry(index)}
                >
                  {label}
                </div>
              ))}
            </div>
          )}
        </div>
        <button className='remove-country' onClick={removeCountryFromSelected}>
          Remove selected country
        </button>
        {message && <p className='message'>{message}</p>}
      </div>
    </div>
  );
};

export default DropdownComponent;