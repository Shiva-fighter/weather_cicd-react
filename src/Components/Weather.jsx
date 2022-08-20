import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { singleDatas } from '../Redux/Action/Action';
import Homes from "../Styles/Home.module.css"
import { GraphsData } from './Graphs';
import ManulWeather from './ManulWeather';
const Weather = () => {
    const dispatch = useDispatch()
    const daily = useSelector((store) => store.weathers.weather)
    let day = ["Thu", "Fri", "Sat", "Sun", "Mon", "Tue", "Wed", "Thu"]
    const showData1 = (ele, i) => {
        let arr1 = []
        arr1.push(ele)
        dispatch(singleDatas(arr1))
    }
    return (
        <>
            {
                daily == null ? <ManulWeather></ManulWeather> :
                    <div className={Homes.HomeBox}>
                        {
                            daily.map((ele, i) => {
                       
                                    return (
                                        <button className={Homes.HomeBox1} onClick={() => showData1(ele, i)} key={i}>
                                            <div className={Homes.HomeBoxChildPar}>
                                                <div className={Homes.HomeBoxChild1}>{day[i]}</div>
                                                <div className={Homes.HomeBoxChild1}>{ele.temp.day}% </div>
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
            }
        </>
    )
}
export default Weather
