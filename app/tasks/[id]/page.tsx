import { fetchSingleTask } from "@/lib/tasks-api";

interface SingleTaskProps {
  params: Promise<{ id: string }>;
}

export default async function SingleTask({ params }: SingleTaskProps) {
  const { id } = await params;

  const task = await fetchSingleTask(id);

  return (
    <>
      <p>{task.text}</p>
      <p>Completed: {task.completed.toString()}</p>
    </>
  );
}
