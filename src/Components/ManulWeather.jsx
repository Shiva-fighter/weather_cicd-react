import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Homes from "../Styles/Home.module.css"
import axios from 'axios'
import { useState } from 'react';
import WeatherData from './WeatherData';
import { rendering, singleDatas } from '../Redux/Action/Action';
import Data from './Data';
const ManulWeather = () => {
    let day = ["Thu", "Fri", "Sat", "Sun", "Mon", "Tue", "Wed", "Thu"]
    const [weekData, setWeekData] = useState([])
   
    const dispatch = useDispatch()
    useEffect(() => {
        async function getWeather() {
            let result = await axios.get(
                `https://api.openweathermap.org/data/2.5/weather?q=mumbai&units=metric&appid=e63f2ed6817baf9661628890461220bd`,
            )
            let tamp = result.data
            let [lat, lon] = [tamp.coord.lat, tamp.coord.lon]
            let res = await axios.get(
                `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=metric&exclude=minutely,hourly,alerts&appid=e63f2ed6817baf9661628890461220bd`,
            )

            let data = res.data
            let daily = data.daily
            dispatch({ type: "CITIES", payload: tamp.name })
            dispatch(rendering(daily))
            setWeekData(daily)
            // console.log('daily', daily);
        }
        getWeather()
    }, [])

    const showData = (ele, i)=>{
        let arr = []
        arr.push(ele)
        dispatch(singleDatas(arr))
    }
    return (
        <>
            <div className={Homes.HomeBox}>
                {
                    weekData.map((ele, i) => {
                        return (
                            <button className={Homes.HomeBox1} onClick={()=>showData(ele, i)} key={i}>
                                <div className={Homes.HomeBoxChildPar}>
                                    <div className={Homes.HomeBoxChild1}>{day[i]}</div>
                                    <div className={Homes.HomeBoxChild1}>{ele.temp.day}%</div>
                                </div>
                                <div className={Homes.HomeBoxChild}>
                                    <div className={Homes.HomeBoxChild1img}>
                                        <img className={Homes.HomeBoxChild1Icon} src='https://restya.com/wp-content/uploads/2021/05/restya-weather-cb.png' alt="" />
                                    </div>
                                    <div className={Homes.HomeBoxChild1}>Clouds</div>
                                </div>
                            </button>
                        )
                    })
                }
            </div>
            <br />
            <Data  ></Data>
        </>
    )
}
export default ManulWeather
