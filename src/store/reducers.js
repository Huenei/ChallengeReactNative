import {combineReducers} from 'redux';
import drinksReducer from '../screens/drinks/reducer';

export default combineReducers({
    drinks: drinksReducer
})