import React, { useEffect } from 'react'
import Homes from "../Styles/Home.module.css"
import Weather from './Weather'
import SearchBar from './SearchBar'
import WeatherData from './WeatherData'
import { useSelector } from 'react-redux'
import Graphs from './Graphs'
import GoogleMap from './GoogleMap'
import SimpleChart from './SimpleChart'
import { useState } from "react";
const Home = () => {
    
    const city = useSelector((store) => store.weathers.cities)
  
        

    return (
        <>
            <div className={Homes.HomeContainer}>
                <div className={Homes.SearchBar}>
                    <SearchBar></SearchBar>
                </div>
                {/* -----------------------------------  Day Wise Weather ----------------------------------------------------------- */}
                <h3 style={{ textAlign: "center" }}>{city}</h3>
                <div className={Homes.HomeContainerChil}>
                    <Weather></Weather>
                </div>
                <br />
                {/* -----------------------------------  Data Weather ----------------------------------------------------------- */}
                <div className={Homes.HomeContainerData}>
                    <WeatherData></WeatherData>
                </div>
                {/* -----------------------------------  graph ----------------------------------------------------------- */}
                <div className={Homes.HomeContainerGraph}>
                    <Graphs></Graphs>
                </div>
                <br />
                <br />
                <br />
                <br />
                <br />
                {/* -----------------------------------  sample chart----------------------------------------------------------- */}

                <div className={Homes.HomeContainerGraph}>
                    <SimpleChart ></SimpleChart>
                </div>
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />

                <br />
                {/* -----------------------------------  google map ----------------------------------------------------------- */}

                <div className={Homes.HomeContainerGraph}>
                    <GoogleMap ></GoogleMap>
                </div>
            </div>
        </>
    )
}
export default Home
