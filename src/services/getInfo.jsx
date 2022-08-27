import { url, apiKey} from './settings'


export function getInfo({ params }) {
  let apiURL = `${url}/${params.type}/${params.id}?api_key=${apiKey}&language=en-US`;

  return fetch(apiURL)
    .then((res) => res.json())
    .then((response) => {
      const results = response;
      return results;
    });
}
