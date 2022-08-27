import { url, apiKey} from './settings'

export function getGenres() {
  let apiURL = `${url}/genre/movie/list?api_key=${apiKey}&language=en-US`;

  return fetch(apiURL)
    .then((res) => res.json())
    .then((response) => {
      const results = response;
      console.log(results)
      return results;
    });
}
