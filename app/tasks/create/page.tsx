"use client";

import { createTask } from "@/lib/tasks-api";
import { useTaskStore } from "@/stores/taskStore";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";

export default function CreateTask() {
  const router = useRouter();

  const { task, setTask, deleteTask } = useTaskStore();

  const { mutate } = useMutation({
    mutationFn: createTask,
    onSuccess: () => {
      deleteTask();
      router.push("/tasks");
    },
  });

  const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    mutate(task);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={task.text}
        type="text"
        name="text"
        placeholder="Task text"
        onChange={(e) => {
          setTask({ text: e.target.value });
        }}
      />
      <button>Create</button>
      <button type="button" onClick={() => router.push("/tasks")}>
        Cancel
      </button>
    </form>
  );
}


// const handleChange = (e) => {
//     setNote({...note, [e.target.name]: e.target.value})
// }