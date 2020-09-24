import React,{createContext, useReducer, useEffect} from 'react';
import stateReducer from './stateReducer';
import {fetchJobApi} from '../Api/fetchJobApi';

const initialState = {
    jobs : [],
    params:{},
    page: 1,
    loading : false,
    error : false
}


export const MyContext = React.createContext(initialState);

export const StateManager  = ({children}) => {
    const [state, dispatch] = useReducer(stateReducer, initialState)

     // Actions
     function getParams(params){
        dispatch({
            type: 'GET_PARAMAS',
            payload: params
        });
    }

    function getPage(page){
        dispatch({
            type: 'GET_PAGE',
            payload: page
        });
    }

    console.log('from state Manager -->', state)

    useEffect(() => {

        const jobApi = async () => {
            let jobData = await fetchJobApi(state.params, state.page)
            dispatch({
                type: 'GET_DATA',
                payload: jobData
            });
        }

        jobApi()
        
    }, [state.params, state.page])

    return(
        <MyContext.Provider value={{
            jobs:state.jobs,
            error:state.error,
            getParams,
            getPage
        }}>
            { children }
        </MyContext.Provider>
    )

}


