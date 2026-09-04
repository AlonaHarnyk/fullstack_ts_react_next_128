import axios from "axios";

interface Task {
  id: string;
  text: string;
  completed: boolean;
}

export const fetchTasks = async () => {
  const { data } = await axios.get<Task[]>(
    "https://62584f320c918296a49543e7.mockapi.io/tasks",
  );
  return data;
};

interface TaskData {
  text: string;
}

export const createTask = async (taskData: TaskData) => {
  const { data } = await axios.post<Task>(
    "https://62584f320c918296a49543e7.mockapi.io/tasks",
    taskData,
  );
  return data;
};
