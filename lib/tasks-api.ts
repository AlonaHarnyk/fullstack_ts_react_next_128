import axios from "axios";

const nextApi = axios.create({
  baseURL: "http://localhost:3000/api",
  withCredentials: true,
});

interface Task {
  id: string;
  text: string;
  completed: boolean;
}

export const fetchTasks = async () => {
  const { data } = await nextApi.get<Task[]>("/tasks", {
    params: {
      test: "test",
    },
  });
  return data;
};

interface TaskData {
  text: string;
}

export const createTask = async (taskData: TaskData) => {
  const { data } = await nextApi.post<Task>("/tasks", taskData);
  return data;
};

export const fetchSingleTask = async (id: Task["id"]) => {
  const { data } = await nextApi.get<Task>(`/tasks/${id}`);
  return data;
};
