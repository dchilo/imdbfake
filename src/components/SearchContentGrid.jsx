import { useEffect, useState } from "react";
import { search } from "../services/search";
import { ContentGrid } from "./ContentGrid";

export function SearchContentGrid({ params }) {
  const [content, setContent] = useState([]);
  console.log(params)
  const {keyword} = params


  useEffect(
    function () {
      search({ keyword }).then((content) => setContent(content));
    },
    [keyword]
  );

  return (
    <ContentGrid content={content} />
  );
}
