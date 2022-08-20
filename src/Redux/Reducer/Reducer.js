import { FAILURE, LOADING, MANUAL, SUCCESS, WEATHER } from "../ActionType/ActionType"
const initState = {
  loading: false,
  failure: false,
  succcess: false,
  weather: null,
  manual : [],
  cities : "",
  single : null
}


export const reducer = (store = initState, { type, payload }) => {
  if(payload == undefined){

    console.log('payload', "No Data Available On this Name");
  }
  switch (type) {
    case WEATHER:
      return { ...store, weather: payload }
    case "CITIES":
      return { ...store, cities: payload }
    case "SINGLE":
      return { ...store, single: payload }
    case MANUAL:
      return { ...store, manual: payload }
    case LOADING:
      return { ...store, loading: true }
    case SUCCESS:
      return { ...store, loading: false, succcess: true }
    case FAILURE:
      return { ...store,loading: false,  success : false, failure: true }
    default:
      return store
  }
}
