import axios from 'axios';

const BASE_URL = 'https://drinkify.b.goit.study/api/v1/';
const INGRED_SEARCH_NAME = `ingredients/search/?`;

export async function getIngredient(ingredName) {
  const params = new URLSearchParams({
    search: ingredName,
  });
  return await axios
    .get(`${BASE_URL}${INGRED_SEARCH_NAME}${params}`)
    .then(res => {
      if (res.status !== 200) {
        throw new Error(res.statusText);
      }
      return res.data;
    });
  /* try {
    const response = await fetch(`${BASE_URL}${INGRED_SEARCH_NAME}${params}`);
    const responseJson = await response.json();
    console.log(responseJson);
    const result = responseJson.find(ing => ing.title === ingredName);
    console.log(result);
    return result;
  } catch (error) {
    console.log(error);
  } */
}

export const fetchIngredient = async id => {
  const response = await fetch(`${BASE_URL}ingredients/${id}`);
  const responseJson = await response.json();
  return responseJson;
};
