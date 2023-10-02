import axios from 'axios';

export class CocktailsAPI {
  #BASE_URL = 'https://drinkify.b.goit.study/api/v1/';
  constructor(quantityOfCocktails) {
    this.quantity = quantityOfCocktails;
    this.searchRequest = '';
  }
  async getRandomCocktails() {
    const searchParams = new URLSearchParams({
      r: this.quantity,
    });
    try {
      const response = await axios(
        `${this.#BASE_URL}cocktails?${searchParams}`
      );
      return response.data;
    } catch (error) {
      console.log(error.message);
    }
  }
  async searchCocktails(key) {
    const searchParams = new URLSearchParams({
      [key]: this.searchRequest,
    });
    try {
      const response = await axios(
        `${this.#BASE_URL}cocktails/search/?${searchParams}`
      );
      return response.data;
    } catch (error) {
      console.log(error.message);
    }
  }

  async getIngredients(id) {
    try {
      const response = await axios(`${this.#BASE_URL}ingredients/${id}`);
      return response.data;
    } catch (error) {
      console.log(error.message);
    }
  }

  async getFullCocktailInfo(id) {
    try {
      const response = await axios(
        `${this.#BASE_URL}cocktails/lookup/?id=${id}`
      );
      return response.data;
    } catch (error) {
      console.log(error.message);
    }
  }

  get query() {
    return this.searchRequest;
  }

  set query(newQuery) {
    this.searchRequest = newQuery;
  }
}
