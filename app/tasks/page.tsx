import { fetchTasks } from "@/lib/tasks-api";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import Link from "next/link";
import TasksClient from "./TasksClient";

export default async function TasksPage() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["tasks"],
    queryFn: fetchTasks,
  });

  return (
    <>
      <h2>Tasks</h2>
      <HydrationBoundary state={dehydrate(queryClient)}>
        <Link href='tasks/create'>Create task</Link>
        <TasksClient />
      </HydrationBoundary>
    </>
  );
}