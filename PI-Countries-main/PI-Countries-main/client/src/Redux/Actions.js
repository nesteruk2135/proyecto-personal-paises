import{
    COUNTRIES_URL,
    ACTIVITY_URL,
    GET_COUNTRIES,
    GET_DETAILS,
    GET_ACTIVITIES,
    GET_NAME_COUNTRIES,
    FILTER_ACTIVITY,
    FILTER_BY_ALPHA,
    FILTER_CONTINENT,
    POPULATION_ORDER,
} from "./Constantes";
import axios from "axios";


export function getAllCountries(){
    return async function(dispatch){
        try {
            const countries = await axios.get(COUNTRIES_URL)
            return dispatch({type:GET_COUNTRIES,payload:countries.data})
        } catch (error) {
            alert (error.response.data.description)
        }
    }
}
export function getDetails(id) {
    return function (dispatch) {
      try {
        axios
          .get(`${COUNTRIES_URL}/${id}`)
          .then((r) => dispatch({ type: GET_DETAILS, payload: r.data }));
      } catch (e) {
        alert(e.response.data.description);
      }
    };
  }
  export function getActivities() {
    return async function (dispatch) {
      try {
        const actJson = await axios.get(ACTIVITY_URL);
        return dispatch({ type: GET_ACTIVITIES, payload: actJson.data });
      } catch (e) {
        alert(e.response.data.description);
      }
    };
  }
export function getNameCountries(name){
    return async function(dispatch){
        try {
            const countriesJson= await axios.get(`${COUNTRIES_URL}?name=${name}`)
        return dispatch({
            type:GET_NAME_COUNTRIES,
            payload:countriesJson.data
        })
        } catch (error) {
            alert(error.response.data.description)
        }
    }
}

//post 
export function postActivity(payload) {
    return async function () {
      try {
        const newActivity = await axios.post(ACTIVITY_URL, payload);
        alert(newActivity.data.msg);
        return newActivity;
      } catch (e) {
        alert(e.response.data.description);
      }
    };
  }
//filters
export function filterActivity(payload){
    return{
        type:FILTER_ACTIVITY,
        payload,
    }
}
export function filterContinent(payload){
    return {
        type:FILTER_CONTINENT,
        payload,
    };
}
export function filterAlpha(payload) {
    return {
      type: FILTER_BY_ALPHA,
      payload,
    };
  }
  
  export function populationOrder(payload) {
    return {
      type: POPULATION_ORDER,
      payload,
    };
  }
  