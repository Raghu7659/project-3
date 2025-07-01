
import React, { useEffect, useReducer } from 'react';
const FETCH_INIT = "FETCH_INIT";
const FETCH_SUCCESS = "FETCH_SUCCESS";
const FETCH_ERROR = "FETCH_ERROR";

const initialState = {
    loading: true,
    data: null,
    error: null
};

const dataReducer = (state, action) => {
    switch (action.type) {
        case FETCH_INIT:
            return { ...state, loading: true, error: null };
        case FETCH_SUCCESS:
            return { ...state, loading: false, data: action.payload };
        case FETCH_ERROR:
            return { ...state, loading: false, error: action.payload };
        default:
            return state;
    }
};

const Multistate = () => {
    const [state, dispatch] = useReducer(dataReducer, initialState);

    const dataHandler = async () => {
        dispatch({ type: FETCH_INIT });
        try {
            const response = await fetch("https://jsonplaceholder.typicode.com/users");
            const newData = await response.json();
            dispatch({ type: FETCH_SUCCESS, payload: newData });
        } catch (error) {
            dispatch({ type: FETCH_ERROR, payload: error.message });
        }
    };

    useEffect(() => {
        dataHandler();
    }, []);

    return (
        <div>MultiState</div>
    );
};

export default Multistate;