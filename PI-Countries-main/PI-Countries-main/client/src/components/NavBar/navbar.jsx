import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getAllCountries } from "../../Redux/Actions";
import FilterActivity from "./Filters/FilterActivity/filterActivity";
import FilterAlpha from "./Filters/FilterAlpha/filterAlpha";
import FilterContinent from "./Filters/FilterContinent/filterContinent";
import FilterPopulation from "./Filters/FilterPopulation/filterPopulation";
import "./NavBar.css";

export default function NavBar({ setOrder, setCurrentPage }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleFilters(e) {
    e.preventDefault();
    dispatch(getAllCountries());
    setCurrentPage(1);
  }

  function handleClick(e) {
    e.preventDefault();
    navigate("/create");
  }
  return (
    <div className='nav-container'>
      <FilterActivity setCurrentPage={setCurrentPage} />
      <FilterContinent setCurrentPage={setCurrentPage} />
      <FilterAlpha setOrder={setOrder} />
      <FilterPopulation setOrder={setOrder} />
      <button className='nav-btn' onClick={(e) => handleFilters(e)}>
        Show all Countries
      </button>
      <button className='nav-btn' onClick={(e) => handleClick(e)}>
        Create Activity
      </button>
    </div>
  );
}
