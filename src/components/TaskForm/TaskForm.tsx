import css from "./TaskForm.module.css";

export default function TaskForm() {
  const handleSubmit = (formData: FormData) => {
    console.log(formData.get("text") as string);
  };

  return (
    <form className={css.form} action={handleSubmit}>
      <label className={css.label}>
        Task text
        <textarea name="text" className={css.input} rows={5}></textarea>
      </label>

      <button type="submit" className={css.button}>
        Create
      </button>
    </form>
  );
}