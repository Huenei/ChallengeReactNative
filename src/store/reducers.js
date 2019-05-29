import {combineReducers} from 'redux';
import drinksReducer from '../screens/Drinks/reducer';

export default combineReducers({
    drinks: drinksReducer
})