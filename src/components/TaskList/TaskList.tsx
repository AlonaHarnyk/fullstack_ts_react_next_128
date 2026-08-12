import { useMutation, useQueryClient } from "@tanstack/react-query";
import type { Task } from "../../types/task";
import css from "./TaskList.module.css";
import { deleteTask, updateTask } from "../../services/taskService";

interface TaskListProps {
  tasks: Task[];
}

export default function TaskList({ tasks }: TaskListProps) {
  const queryClient = useQueryClient();

  const { mutate: deleteMutate } = useMutation({
    mutationFn: deleteTask,
    // onMutate(arg) {
    //   console.log(arg);
    //   console.log("Before!");
    // },
    onSuccess(deletedTask) {
      console.log(deletedTask);
      queryClient.invalidateQueries({ queryKey: ["tasks"] });
      // queryClient.setQueryData<Task[]>(["tasks"], (prevTasks) => {
      //   if (!prevTasks) {
      //     return [];
      //   }
      //   return prevTasks.filter((task) => task.id !== deletedTask.id);
      // });
    },
    onError(e) {
      console.log(e);
      alert("Error happened!");
    },
    // onSettled(arg) {
    //   console.log(arg);
    //   console.log("Finally!");
    // },
  });

  const { mutate: updateMutate } = useMutation({
    mutationFn: updateTask,
    onSuccess() {
      queryClient.invalidateQueries({ queryKey: ["tasks"] });
    },
    onError() {
      alert("Error happened!");
    },
  });

  return (
    <ul className={css.list}>
      {tasks.map((task) => (
        <li key={task.id} className={css.item}>
          <input
            type="checkbox"
            defaultChecked={task.completed}
            className={css.checkbox}
            onChange={() => {
              updateMutate({ id: task.id, completed: !task.completed });
            }}
          />
          <span className={css.text}>{task.text}</span>
          <button
            type="button"
            className={css.button}
            onClick={() => deleteMutate(task.id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}
