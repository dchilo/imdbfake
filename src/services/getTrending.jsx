import { url, apiKey} from './settings'


export function getTrending({keyword = 'all'} = {}) {

  const apiURL =`${url}/trending/${keyword}/week?api_key=${apiKey}`;

  return fetch(apiURL)
    .then((res) => res.json())
    .then((response) => {
      const { results } = response;
      return results
    });
}
