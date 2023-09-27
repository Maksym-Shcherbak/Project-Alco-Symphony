import axios from 'axios';

export class CocktailsAPI {
  #BASE_URL = 'https://drinkify.b.goit.study/api/v1/';
  constructor(selectedLetter, searchQuery) {
    this.quantity = 9;
    this.char = selectedLetter;
    this.cocktailsName = searchQuery;
  }
  async getRandomCocktails() {
    const searchParams = new URLSearchParams({
      r: this.quantity,
    });
    try {
      const response = await axios(
        `${this.#BASE_URL}cocktails?${searchParams}`
      );
      console.log(response);
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
      console.log(response);
      return response.data;
    } catch (error) {
      console.log(error.message);
    }
  }
}
