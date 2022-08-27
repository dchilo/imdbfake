import { useState, useEffect } from "react";
import { getTrending } from '../services/getTrending'

export function useTrendings ({keyword}) {
    const [content, setContent] = useState([]);

    console.log(keyword)
  
    useEffect(
      function () {
        getTrending({ keyword }).then((content) => setContent(content));
      },
      [keyword]
    );

    return {content}
}