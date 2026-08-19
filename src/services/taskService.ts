import axios from "axios";
import type { SortOrder, Task, TaskId } from "../types/task";

axios.defaults.baseURL = "https://62584f320c918296a49543e7.mockapi.io";

export const getTasks = async (query: string, sortOrder: SortOrder) => {
  const { data } = await axios.get<Task[]>("/tasks", {
    params: {
      search: query,
      order: sortOrder,
      sortBy: "completed",
    },
  });
  return data;
};

export const deleteTask = async (id: TaskId) => {
  const { data } = await axios.delete<Task>(`/tasks/${id}`);
  return data;
};

// interface TaskData {
//   text: string
// }

export const addTask = async (taskData: Pick<Task, "text">) => {
  const { data } = await axios.post<Task>("/tasks", taskData);
  return data;
};

// type UpdateTaskData = { id: TaskId } & Partial<Omit<Task, "id">>;

interface UpdateTaskData {
  id: TaskId;
  text?: string;
  completed?: boolean;
}

export const updateTask = async ({ id, ...updateTaskData }: UpdateTaskData) => {
  const { data } = await axios.put<Task>(`/tasks/${id}`, updateTaskData);
  return data;
};
