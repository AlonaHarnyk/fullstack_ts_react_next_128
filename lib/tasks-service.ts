import { Task } from "@/types";
import axios from "axios";

export const fetchTasks = async (search: string) => {
  const { data } = await axios.get<Task[]>(
    "https://62584f320c918296a49543e7.mockapi.io/tasks",
    {
      params: { search },
    },
  );
  return data;
};

export const fetchSingleTask = async (id: Task["id"]) => {
  const { data } = await axios.get<Task>(
    `https://62584f320c918296a49543e7.mockapi.io/tasks/${id}`,
  );
  return data;
};
