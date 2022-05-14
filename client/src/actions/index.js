import axios from 'axios';
export const SET_PAGE = 'SET_PAGE';


export function getGames(){
    return function(dispatch){
        axios.get('http://localhost:3001/videogames',{})
        .then((json) => {
            dispatch({type: 'GET_GAMES', payload: json.data})
        })
        .catch(() =>{
            console.log ('HUBO UN ERROR EN LOS DATOS');
        })
    }
}
export function getNameGames(name){
    return async function (dispatch){
    try{
        var json = await axios.get("http://localhost:3001/videogames?name=" + name);
        return dispatch({
            type: "GET_NAME_GAMES",
            payload: json.data
        })
    } 
    catch (error) {
        console.log(error)
    }}
    }

export function getGenres(){
    return async function (dispatch){
        var json = await axios.get("http://localhost:3001/genres", {});
        return dispatch({
            type: "GET_GENRES", 
            payload: json.data});
    };
}
export function getPlatforms(){
    return async function (dispatch){
        var json = await axios.get("http://localhost:3001/videogames", {});
        return dispatch({
            type: "GET_PLATFORMS", 
            payload: json.data});
    };
}
export function getListGenres(){
    return function(dispatch){
        axios.get('http://localhost:3001/genres')
        .then((response)=>{
            dispatch({
                type:'GET_GENRES', 
                payload: response.data})
        }) 
        .catch(()=>{ alert('Error al traer Generos')})
    }
}
export function getDetailsGames(id){
    return function(dispatch){
        axios.get('http://localhost:3001/videogames/'+ id)
        .then((response)=>{
            dispatch({
                type:'GET_DETAILS_GAMES', 
                payload: response.data})
        })
        .catch(()=>{
            console.log('No se encuentra Id');
        })
    }
}
export const cleanId = () => (dispatch) => {
    let rest = {};
    dispatch({
        type: 'CLEAN_ID',
        payload: rest
    })
}
export function postGame(payload){
    return async function (dispatch){
        const response = await axios.post("http://localhost:3001/videogame", payload)
        return response
    }
}
export function filterCreated(value){ //payload es el value q me llega
    // console.log(payload)
    return{
        type: 'FILTER_CREATED',
        payload: value
    }
};

export function orderByName(payload){
    return{
        type: 'ORDER_BY_NAME',
        payload
    }
}

export function orderByRating(payload){
    return{
        type: 'ORDER_BY_RATING',
        payload
    }
}
export function filterGamesByGenre(payload){
    console.log (payload)
    return {
        type: 'FILTER_GAMES_BY_GENRES',
        payload
    }
}