import React, { useEffect, useState } from "react";
import Cards from "../Cards/cards";
import NavBar from "../NavBar/navbar";
import SearchBar from "../SearchBar/SearchBar";
import Loading from "./Loading/Loading"
import { useDispatch, useSelector } from "react-redux";
import { getAllCountries } from "../../Redux/Actions";
import background from "../img/Home.jpg"
import "./Home.css"
export default function Home() {
    const [setOrder] = useState("")
    const [currentPage, setCurrentPage] = useState(1);
    const [loading, setLoading] = useState(true);
    const countries = useSelector((state) => state.countries);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getAllCountries())
    }, [dispatch])
    return (
        <>
            {loading === true ? (
                <Loading setLoading={setLoading} />
            ) : (
                <div>
                    <div className="home-container">

                        <img
                            className="home-image"
                            src={background}
                            alt='Background'
                        />
                        <div className="home-content">
                            <NavBar
                                setOrder={setOrder}
                                setCurrentPage={setCurrentPage}
                            />
                            <SearchBar
                                setCurrentPage={setCurrentPage} />
                            <Cards setCurrentPage={setCurrentPage} currentPage={currentPage} countries={countries} />
                        </div>
                    </div>
                </div>
            )}

        </>
    )
}
