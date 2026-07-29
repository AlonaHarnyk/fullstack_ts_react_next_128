// import OrderForm from "./OrderForm/OrderForm";

import { useState } from "react";
import { getArticles } from "../api/articleServices";
import ArticleList from "./ArticleList/ArticleList";
import SearchForm from "./SearchForm/SearchForm";
import type { Article } from "../types";

export default function App() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const handleSearch = async (topic: string) => {
    try {
      setIsError(false);
      setIsLoading(true);
      const data = await getArticles(topic);
      setArticles(data);
    } catch {
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <h1>Forms and HTTP requests</h1>
      <SearchForm onSearch={handleSearch} />
      {articles.length > 0 && <ArticleList items={articles} />}
      {isLoading && <p>LOADING...</p>}
      {isError && <p>OOOPS! This is error!</p>}
      {/* <OrderForm />
      <OrderForm /> */}
    </>
  );
}
