import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { MdKeyboardArrowDown } from "react-icons/md";

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

function DropdownComponent() {
  const [search, setSearch] = useState("");
  const [isSearch, setIsSearch] = useState(false);
  const [filterData, setFilterData] = useState<{ label: string; value: string }[]>(countryOptions);
  const [drop, setDrop] = useState(false);
  const [cursor, setCursor] = useState(-1);
  const [message, setMessage] = useState("");
  const searchInputRef = useRef<HTMLInputElement>(null);
  const dropdownItemsRef = useRef<(HTMLDivElement | null)[]>([]);

  const handleKey = (e: any) => {
    if (drop) {
      if (e.key === "ArrowUp") {
        setIsSearch(false);
        if (cursor > 0) {
          setCursor(prevCursor => {
            const newCursor = prevCursor - 1;
            scrollToCursor(newCursor);
            return newCursor;
          });
        } else if (cursor === 0) {
          setCursor(-1);  
          scrollToCursor(-1);
        } else if (cursor === -1) {
          setIsSearch(true);  
        }
      } else if (e.key === "ArrowDown") {
        setIsSearch(false);
        if (cursor < filterData.length - 1) {
          setCursor(prevCursor => {
            const newCursor = prevCursor + 1;
            scrollToCursor(newCursor);
            return newCursor;
          });
        } else if (cursor === filterData.length - 1) {
          setCursor(0);  
          scrollToCursor(0);
        }
      } else if (e.key === " " || e.key === "Enter") {
        e.preventDefault();
        if (cursor >= 0) {
          selectCountry(cursor);
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
  };

  const scrollToCursor = (index: number) => {
    if (index === -1) {
      searchInputRef.current?.scrollIntoView({
        behavior: 'smooth',
      });
    } else {
      dropdownItemsRef.current[index]?.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest'
      });
    }
  };

  const removeCountryFromSelected = () => {
    if (search) {
      setSearch(""); 
      setMessage("Selected country removed successfully!");
    } else {
        setMessage("No country selected to remove");
    }
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (!(event.target as Element).closest('.country_data')) {
        setDrop(false);
      }
    };

    if (drop) {
      document.body.addEventListener('click', handleClickOutside);
    }

    return () => {
      document.body.removeEventListener('click', handleClickOutside);
    };
  }, [drop]);

  useEffect(() => {
    setFilterData(
      countryOptions.filter(({ label }) =>
        label.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [search]);

  useEffect(() => {
    if (drop) {
      setCursor(-1); 
    }
  }, [drop]);

  return (
    <div className='mainDropDown' tabIndex={0} onKeyDown={handleKey}>
      <Link className='back-selectPage' href="/">Back</Link>
      <div className='main-content-Searchable'>
        <h2>Searchable Dropdown</h2>
        <div className='country_data'>
          <div className="search">
            <input
              ref={searchInputRef}
              type='text'
              value={search}
              onClick={() => { 
                setDrop(prev => !prev)
                setIsSearch(true)
              }}
              onChange={(e) => {
                if (isSearch) {
                  setSearch(e.target.value);
                }
              }}
              placeholder='Search for countries...'
            />
            <span>
              <MdKeyboardArrowDown style={{fontSize: "25px", pointerEvents: 'none'}} />
            </span>
          </div>
          {drop && (
            <div className='country'>
              {filterData.map(({ label, value }, index) => (
                <div
                  className={`countryValue ${cursor === index ? 'active' : ''}`}
                  key={value}
                  role="button"
                  tabIndex={0}
                  ref={el => {
                    dropdownItemsRef.current[index] = el;
                  }}                  
                  onClick={() => selectCountry(index)}
                >
                  {label}
                </div>
              ))}
            </div>
          )}
        </div>
        <button className='remove-country'
                onClick={() => removeCountryFromSelected()}>
          Remove selected country
        </button>
        {message && <p className='message'>{message}</p>}
      </div>
    </div>
  );
}

export default DropdownComponent;

