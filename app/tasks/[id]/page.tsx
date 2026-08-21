import { fetchSingleTask } from "@/lib/tasks-service";
import { QueryClient, HydrationBoundary, dehydrate } from "@tanstack/react-query";
import SingleTaskClient from "./SingleTaskPage.client";

interface SingleTaskPageProps {
  params: Promise<{ id: string }>;
}

export default async function SingleTaskPage({ params }: SingleTaskPageProps) {
  const { id } = await params;

  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["task", id],
    queryFn: () => fetchSingleTask(id),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <SingleTaskClient />
    </HydrationBoundary>
  );
}
