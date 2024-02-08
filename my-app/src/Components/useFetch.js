import {useReducer,useEffect} from 'react'
import axios from 'axios';

const initialState = {
    data: [],
    loading: true,
    error: null
};

const Actions={
    API_REQUIEST:"api-request",
    FETCH_DATA:"fetch data",
    ERROR:"error"
};

function reducer(state, {type, payload}){
    switch (type) {
        case Actions.API_REQUIEST:
            return {
                ...state, data:[], loading:true
            }

        case Actions.FETCH_DATA:
           return {
                ...state, data:payload.data, loading:false
            }

        case Actions.ERROR:
            return {
                 ...state, data:[], error:payload
             }
        
    
        default:
        return state;
    }

};


function useFetch(url) {
    const [state, dispatch] = useReducer(reducer, initialState);

    useEffect(()=>{
        dispatch({type:Actions.API_REQUIEST});
        axios.get(url).then((res)=>{
            dispatch({ type:Actions.FETCH_DATA,payload:res.data})

            }).catch((e)=>{
                dispatch({type:Actions.ERROR, payload:e.error});
        })

    },[url])

    return state
};

export default useFetch