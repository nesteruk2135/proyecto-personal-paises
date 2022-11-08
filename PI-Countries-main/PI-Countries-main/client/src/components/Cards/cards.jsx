import React, { useState } from "react";
import { Link } from "react-router-dom";

import Pagination from "../Pagination/Pagination";
import "./cards.css";

export default function Cards({ setCurrentPage, currentPage, countries }) {
    let [countryPerPage] = useState(9);
    const indexOfLastCountry = currentPage * countryPerPage;
    const indexOfFirstCountry = indexOfLastCountry - countryPerPage;
    const currentCountry = countries.slice(
      indexOfFirstCountry,
      indexOfLastCountry
    );
  
    const pag = (pageNumber) => {
      setCurrentPage(pageNumber);
    };
  
    return (
      <div>
        <Pagination
          className='cards-pagination'
          currentPage={currentPage}
          totalCount={countries.length}
          pageSize={countryPerPage}
          onPageChange={pag}
        />
        <div>
          <span className='cards-conteiner'>
            {currentCountry?.map((el) => {
              return (
                <div key={el.id} className='cards'>
                  <div className='cards-content'>
                    <img
                      src={el.flag}
                      alt=''
                      className='cards-flag'
                    />
                    <h4 className='cards-name'> {el.name}</h4>
                    <h4 className='cards-info'>
                    
                      {el.continent}
                    </h4>
                    <h4 className='cards-info'>
                     
                      {el.population}
                    </h4>
                    <Link to={`/countries/${el.id}`}>
                      <button className='cards-btn'>View Details</button>
                    </Link>
                  </div>
                </div>
              );
            })}
          </span>
        </div>
        <Pagination
          className='cards-pagination'
          currentPage={currentPage}
          totalCount={countries.length}
          pageSize={countryPerPage}
          onPageChange={pag}
        />
      </div>
    );
  }
  
  // classNames="cards-pagination")}
  