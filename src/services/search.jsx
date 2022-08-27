import { url, apiKey} from './settings'


export function search({ keyword }) {
  const apiURL = `
  ${url}/search/multi?api_key=${apiKey}&language=en-US&query=${keyword}&page=1&include_adult=false}`;

  return fetch(apiURL)
    .then((res) => res.json())
    .then((response) => {
      const { results } = response;
      return results;
    });
}
