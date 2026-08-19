import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import TaskList from "../TaskList/TaskList";
import Modal from "../Modal/Modal";
import TaskForm from "../TaskForm/TaskForm";
import { getTasks } from "../../services/taskService";
import css from "./App.module.css";
import SearchBox from "../SearchBox/SearchBox";
import SortFilter from "../SortFilter/SortFilter";
import type { SortOrder } from "../../types/task";
import { useDebouncedCallback } from "use-debounce";

const useToggle = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  const open = () => setIsOpen(true);
  const close = () => setIsOpen(false);

  return { isOpen, open, close };
};

export default function App() {
  const [searchValue, setSearchValue] = useState("");
  const [sortOrder, setSortOrder] = useState<SortOrder>("asc");
  const { data, isLoading } = useQuery({
    queryKey: ["tasks", searchValue, sortOrder],
    queryFn: () => getTasks(searchValue, sortOrder),
    retry: false,
  });

  // const onSearch = (value: string) => {
  //   setSearchValue(value);
  // };

  // const debouncedOnSearch = useDebouncedCallback(onSearch, 500);

  const debouncedOnSearch = useDebouncedCallback(setSearchValue, 500);

  const onSort = (value: SortOrder) => {
    setSortOrder(value);
  };

  // const [isModalOpen, setIsModalOpen] = useState(false);

  // const openModal = () => setIsModalOpen(true);

  // const closeModal = () => setIsModalOpen(false);

  const { isOpen, open, close } = useToggle();

  return (
    <div className={css.container}>
      <header className={css.header}>
        <button className={css.createButton} onClick={open}>
          Create task
        </button>
      </header>
      {isLoading && <strong className={css.loading}>Loading tasks...</strong>}
      <SearchBox searhValue={searchValue} onSearch={debouncedOnSearch} />
      <SortFilter sortValue={sortOrder} onSort={onSort} />
      {data && !isLoading && <TaskList tasks={data} />}
      {isOpen && (
        <Modal onClose={close}>
          <TaskForm onClose={close} />
        </Modal>
      )}
    </div>
  );
}
