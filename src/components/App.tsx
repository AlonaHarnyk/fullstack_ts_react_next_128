// import SwapiExample from "./SwapiExample"

import { useState } from "react";
import SearchForm from "./SearchForm";
import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { fetchArticles } from "../services/articleService";
import ArticleList from "./ArticleList";
import ReactPaginateModule from "react-paginate";
import type { ReactPaginateProps } from "react-paginate";
import type { ComponentType } from "react";
type ModuleWithDefault<T> = { default: T };
const ReactPaginate = (
  ReactPaginateModule as unknown as ModuleWithDefault<
    ComponentType<ReactPaginateProps>
  >
).default;

import css from "./App.module.css";

export default function App() {
  const [topic, setTopic] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const { data, isLoading, isError } = useQuery({
    queryKey: ["articles", topic, currentPage],
    queryFn: () => fetchArticles(topic, currentPage),
    enabled: topic.length > 0,
    placeholderData: keepPreviousData
    // initialData: { hits: [], nbPages: 0 },
  });

  const handleSearch = (topic: string) => {
    setCurrentPage(1);
    setTopic(topic);
  };

  return (
    <>
      <h1>TanStack Query</h1>
      <SearchForm onSubmit={handleSearch} />
      {isLoading && <strong>Loading...</strong>}
      {isError && <strong>Error!</strong>}
      <ReactPaginate
        breakLabel="..."
        nextLabel=">"
        onPageChange={({ selected }) => setCurrentPage(selected + 1)}
        pageRangeDisplayed={5}
        pageCount={data?.nbPages ?? 0}
        previousLabel="<"
        renderOnZeroPageCount={() => <>{topic.length > 0 && <p>NO DATA</p>}</>}
        containerClassName={css.pagination}
        activeClassName={css.active}
        forcePage={currentPage - 1}
      />
      {data && data.hits && data.hits.length > 0 && (
        <ArticleList items={data.hits} />
      )}
      {/* <SwapiExample /> */}
    </>
  );
}
