import axios from 'axios';

const BASE_URL = 'https://drinkify.b.goit.study/api/v1/';
const INGRED_SEARCH_NAME = `ingredients/search/?`;

export async function getIngredient(ingredName) {
  const params = new URLSearchParams({
    search: ingredName,
  });
  return await axios
    .get(`${BASE_URL}${INGRED_SEARCH_NAME}${params}`)
    .then(response => {
      if (response.status !== 200) {
        throw new Error(response.statusText);
      }
      return response.data;
    });
}

export const fetchIngredient = async id => {
  const response = await fetch(`${BASE_URL}ingredients/${id}`);
  const responseJson = await response.json();
  return responseJson;
};
