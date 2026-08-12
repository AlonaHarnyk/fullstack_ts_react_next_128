import { useMutation, useQueryClient } from "@tanstack/react-query";
import css from "./TaskForm.module.css";
import { addTask } from "../../services/taskService";

interface TaskFormProps {
  onClose: () => void;
}

export default function TaskForm({ onClose }: TaskFormProps) {
  const queryClient = useQueryClient();

  const { mutate, isPending } = useMutation({
    mutationFn: addTask,
    onSuccess() {
      queryClient.invalidateQueries({ queryKey: ["tasks"] });
      onClose();
    },
  });

  const handleSubmit = (formData: FormData) => {
    const text = formData.get("text") as string;
    mutate(
      { text },
      // {
      //   onSuccess() {
      //     console.log('test onSuccess')
      //   },
      // },
    );
  };

  return (
    <form className={css.form} action={handleSubmit}>
      <label className={css.label}>
        Task text
        <textarea name="text" className={css.input} rows={5}></textarea>
      </label>

      <button type="submit" className={css.button}>
        {isPending ? "Creating" : "Create"}
      </button>
    </form>
  );
}
