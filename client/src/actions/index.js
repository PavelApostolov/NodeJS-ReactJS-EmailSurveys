//Action creators - functions that return actions
import axios from 'axios';
import { FETCH_USER, FETCH_SURVEYS } from './types';

//fetchUser using promises
// export const fetchUser = () => 
//     function(dispatch){
//     axios.get('/api/current_user')
//         .then(res => dispatch({ type: FETCH_USER, payload: res.data }))
//     };

//fetchUser with async
export const fetchUser = () => async dispatch => {
    const res = await axios.get('/api/current_user');
    dispatch({ type: FETCH_USER, payload: res.data });
};

export const handleToken = (token) => async dispatch => {
    const res = await axios.post('/api/stripe', token);
    dispatch({ type: FETCH_USER, payload: res.data });
};

export const submitSurvey = (values, history) => async dispatch => {
    const res = await axios.post('/api/surveys', values);
  
    history.push('/surveys');
    dispatch({ type: FETCH_USER, payload: res.data });
  };

export const fetchSurveys = () => async dispatch => {
    const res = await axios.get('/api/surveys');

    //payload will be an array of all the surveys of a given user
    dispatch({ type: FETCH_SURVEYS, payload: res.data })
}