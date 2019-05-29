import {APIendpoint} from '../config/constants';

export const GetCocktails = async () => {
    let response = await fetch(APIendpoint);
    let responseJson = await response.json();
    return responseJson.drinks;
}