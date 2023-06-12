import { MOVIES_URL } from './constants';

export class MoviesApi {
  _url;
  _headers;

  constructor(options) {
    this._url = options.baseUrl;
    this._headers = options.headers;
  }

  getMovies() {
    return fetch(`${this._url}`,{
      headers: this._headers
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`${res.status}`);
      })
  }
}

export const moviesApi = new MoviesApi({
  baseUrl: `${MOVIES_URL}`,
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  }
});
