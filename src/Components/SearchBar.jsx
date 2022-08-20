import React from 'react'
import Searchs from "../Styles/Search.module.css"
import { useState } from 'react'
import { ActionWeather } from '../Redux/Action/Action'
import { useDispatch, useSelector } from 'react-redux'
import { useCallback } from 'react'
const SearchBar = () => {
    const dispatch = useDispatch()
    const [city, SetCity] = useState("")
    function debouncing(argument) {
        console.log(city)
        let timer
        return function (...args) {
            if (timer) clearTimeout(timer)
            timer = setTimeout(function () {
                timer = null
                argument.apply(this, args)
            }, 1000)
        }
    }
    const handleSubmit = async () => {
        console.log("submit")
        dispatch(ActionWeather(city))
    }
    const handleChange = (e) => {
        const { value } = e.target
        dispatch(ActionWeather(value))
        SetCity(value)

        console.log('handlechange', city);
    }
    const deb = useCallback(debouncing(handleChange))

    return (
        <div className={Searchs.SearchContainer}>
            <input type="text" onChange={deb} className={Searchs.SearchBox} placeholder="Enter City Name Here" />
            <button className={Searchs.SearchIcone} onClick={handleSubmit}><i className={Searchs.SearchIcone} class="fa-solid fa-magnifying-glass"></i></button>
        </div>
    )
}
export default SearchBar
