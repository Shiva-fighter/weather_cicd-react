import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import Styles from "../Styles/FlowChart.module.css"
import { useSelector } from 'react-redux'
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip
} from "recharts";
// import { ResponsiveContainer, BarChart, XAxis, YAxis, Bar, Tooltip, Legend, Line, CartesianGrid } from "recharts"
import FlowChart from './FlowChart'
const Graphs = () => {
  const daily = useSelector((store) => store.weathers.weather)
  const manual = useSelector((store) => store.weathers.manual)
  const [tepmrature, setTemprature] = useState([])
  const day = ["Thu", "Fri", "Sat", "Sun", "Mon", "Tue", "Wed", "Thu"]
  useEffect(() => {
    let arr = []
    if (daily == null) {
      manual.map((ele, i) => {
        ele.temp.name = day[i]
        ele.temp.index = i
        arr.push(ele.temp)
      })
      setTemprature([...arr])
    }
    else {
      daily.map((ele, i) => {
        ele.temp.name = day[i]
        ele.temp.index = i
        arr.push(ele.temp)
      })
      setTemprature([...arr])
    }
  }, [daily, manual])
  // console.log('tepmrature', tepmrature);
  return (
    <div className={Styles.Flowchart}>
      {
        tepmrature.length != 0 && <FlowChart tepmrature={tepmrature}></FlowChart>
      }
    </div>
  )
}
export default Graphs
