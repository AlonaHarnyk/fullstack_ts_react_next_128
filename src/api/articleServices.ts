import axios from "axios";
import type { Article } from "../types";

interface ArticlesResponse {
  hits: Article[];
}

export const getArticles = async (topic: string) => {
  const { data } = await axios.get<ArticlesResponse>(
    "http://hn.algolia.com/api/v1/search",
    {
      params: {
        query: topic,
      },
    },
  );
  return data.hits;
};
