import { create } from "zustand";
import { persist } from "zustand/middleware";

interface TaskData {
  text: string;
}

interface TaskStore {
  task: TaskData;
  setTask: (newTask: TaskData) => void;
  deleteTask: () => void;
}

const initialTask: TaskData = {
  text: "",
};

export const useTaskStore = create<TaskStore>()(
  persist(
    (set) => ({
      task: initialTask,
      setTask: (newTask) => set({ task: newTask }),
      deleteTask: () => set({ task: initialTask }),
    }),
    {
      name: "task",
    },
  ),
);
