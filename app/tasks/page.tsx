import { fetchTasks } from "@/lib/tasks-service";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import TasksClient from "./ TasksPage.client";

export default async function TasksPage() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["tasks", {search: ''}],
    queryFn: () => fetchTasks(""),
  });

  return (
    <>
      <h2>Tasks</h2>
      <HydrationBoundary state={dehydrate(queryClient)}>
        <TasksClient />
      </HydrationBoundary>
    </>
  );
}
