import React from 'react'
import { useSelector } from "react-redux";
import Homes from "../Styles/Home.module.css"

const GoogleMap = () => {
    const current_city = useSelector((store) => store.weathers.cities)
    return (
        <div gmap_iframe className={Homes.googleMap}>
            <iframe
                title="gmap"
                name="gMap"
                className="gmap_iframe"
                height={"300px"}
                width={"99%"}
                src={`https://maps.google.com/maps?q=${current_city}&t=&z=13&ie=UTF8&iwloc=&output=embed`}
            ></iframe>
        </div>
    );
}
export default GoogleMap
