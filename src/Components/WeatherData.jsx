import React from 'react'
import { useSelector } from 'react-redux';
import Homes from "../Styles/Home.module.css"
import SimpleChart from './SimpleChart';
const WeatherData = () => {
    const weekData = useSelector((store) => store.weathers.weather)
    const single = useSelector((store) => store.weathers.single)
    return (
        <>
        
            {
                weekData == null ? null :
                    single ? single.map((ele, i) => {
                        let convert = ele.sunrise;
                        let ApiDate = new Date(convert * 1000).toDateString().split(" ")
                        return (
                            <div className={Homes.HomeData} key={i}>
                                <div className={Homes.HomeData1}>
                                    <div className={Homes.HomeDataChildParent}>
                                        <div className={Homes.HomeDataChild}>
                                            <div className={Homes.HomeDataChild1}>Pressure</div>
                                            <div className={Homes.HomeDataChild1}>{ele.pressure} hpa</div>
                                        </div>
                                        <div className={Homes.HomeDataChild}>
                                            <div className={Homes.HomeDataChild1}>Sunrise</div>
                                            <div className={Homes.HomeDataChild1}>{new Date(ele.sunrise * 1000).toLocaleTimeString("en-IN")} am</div>
                                        </div>
                                    </div>
                                    <div className={Homes.HomeDataChildParent}>
                                        <div className={Homes.HomeDataChild}>
                                            <div className={Homes.HomeDataChild1}>Humidity</div>
                                            <div className={Homes.HomeDataChild1}>{ele.humidity} %</div>
                                        </div>
                                        <div className={Homes.HomeDataChild}>
                                            <div className={Homes.HomeDataChild1}>Sunset</div>
                                            <div className={Homes.HomeDataChild1}>{new Date(ele.sunset * 1000).toLocaleTimeString("en-IN")} pm</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    }) : weekData.map((ele, i) => {
                        let convert = ele.sunrise;
                        let ApiDate = new Date(convert * 1000).toDateString().split(" ")
                        const currentDate = new Date().toDateString().split(" ")
                        return (
                            currentDate[0] == ApiDate[0] && i != weekData.length - 1 ? <div className={Homes.HomeData} key={i}>
                                <div className={Homes.HomeData1}>
                                    <div className={Homes.HomeDataChildParent}>
                                        <div className={Homes.HomeDataChild}>
                                            <div className={Homes.HomeDataChild1}>Pressure</div>
                                            <div className={Homes.HomeDataChild1}>{ele.pressure} hpa</div>
                                        </div>
                                        <div className={Homes.HomeDataChild}>
                                            <div className={Homes.HomeDataChild1}>Sunrise</div>
                                            <div className={Homes.HomeDataChild1}>{new Date(ele.sunrise * 1000).toLocaleTimeString("en-IN")} am</div>
                                        </div>
                                    </div>
                                    <div className={Homes.HomeDataChildParent}>
                                        <div className={Homes.HomeDataChild}>
                                            <div className={Homes.HomeDataChild1}>Humidity</div>
                                            <div className={Homes.HomeDataChild1}>{ele.humidity} %</div>
                                        </div>
                                        <div className={Homes.HomeDataChild}>
                                            <div className={Homes.HomeDataChild1}>Sunset</div>
                                            <div className={Homes.HomeDataChild1}>{new Date(ele.sunset * 1000).toLocaleTimeString("en-IN")} pm</div>
                                        </div>
                                    </div>
                                </div>
                            </div> : <></>
                        )
                    })
            }
        </>
    )
}
export default WeatherData
