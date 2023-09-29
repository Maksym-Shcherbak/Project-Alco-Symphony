import axios from 'axios';

const BASE_URL = 'https://drinkify.b.goit.study/api/v1/cocktails/search';

export default class SearchApiService {
  constructor() {
    this.searchRequest = '';
  }

  async fetchCoctails(key) {
    try {
      const response = await axios.get(
        `${BASE_URL}/?${key}=${this.searchRequest}`
      );
      return response.data;
    } catch (error) {
      console.log(error.response.statusText);
      return null;
    }
  }

  get query() {
    return this.searchRequest;
  }

  set query(newQuery) {
    this.searchRequest = newQuery;
  }
}
