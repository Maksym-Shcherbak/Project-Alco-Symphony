import axios from 'axios';

export class CocktailsAPI {
  #BASE_URL = 'https://drinkify.b.goit.study/api/v1/';
  constructor(quantityOfCocktails) {
    this.quantity = quantityOfCocktails;
  }
  async getRandomCocktails() {
    const searchParams = new URLSearchParams({
      r: this.quantity,
    });
    try {
      const response = await axios(
        `${this.#BASE_URL}cocktails?${searchParams}`
      );
      console.log(response.data);
      return response.data;
    } catch (error) {
      console.log(error.message);
    }
  }
  async searchCocktails(queryParam, searchQuery) {
    const searchParams = new URLSearchParams({
      [queryParam]: searchQuery,
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
      const response = await axios(
        `${this.#BASE_URL}cocktails/ingredients/?${id}`
      );
      return response.data;
    } catch (error) {
      console.log(error.message);
    }
  }
}
