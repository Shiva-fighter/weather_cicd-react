import axios from 'axios'
import { FAILURE, LOADING, MANUAL, SUCCESS, WEATHER } from '../ActionType/ActionType'
export const ActionWeather = (city) => async (dispatch) => {

  try {
    dispatch(loadings())
    let result = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=e63f2ed6817baf9661628890461220bd`,
    ).catch((errer)=>{
        console.log('message', "No Data Found");
        dispatch(failures())

    })
    let tamp = result.data
    let [lat, lon] = [tamp.coord.lat, tamp.coord.lon]
    let res = await axios.get(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=metric&exclude=minutely,hourly,alerts&appid=e63f2ed6817baf9661628890461220bd`,
    ).catch((errer)=>{
      console.log('message', "No Data Found");

        dispatch(failures())

    })
    let data = res.data
    let daily = data.daily
    console.log('daily', daily)
    dispatch(successs())
    dispatch({type: "CITIES", payload : tamp.name})

    dispatch({ type: WEATHER, payload: daily })
  } catch (error) {
    console.log('message', "No Data Found");

  }
}
export const loadings = () => (dispatch) => {
  try {
    dispatch({ type: LOADING })
  } catch (error) {
    console.log('error', error);

  }
}
export const successs = () => (dispatch) => {
  try {
    dispatch({ type: SUCCESS })
  } catch (error) {
    console.log('error', error);

  }
}
export const failures = () => (dispatch) => {
  try {
    dispatch({ type: FAILURE })
  } catch (error) {
    console.log('error', error);

  }
}
export const rendering = (daily) => (dispatch) => {
  try {
    dispatch({ type: MANUAL , payload : daily})
  } catch (error) {
    console.log('error', error);

  }
}

export const singleDatas = (ele, i) => (dispatch) => {
  console.log('ele action', ele);
  try {
    dispatch({ type: 'SINGLE' , payload : ele})
  } catch (error) {
    console.log('error', error);

  }
}
