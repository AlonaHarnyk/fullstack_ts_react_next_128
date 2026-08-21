"use client";

import { fetchSingleTask } from "@/lib/tasks-service";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "next/navigation";

export default function SingleTaskClient() {
  const { id } = useParams<{ id: string }>();

  const { data, isLoading, isError } = useQuery({
    queryKey: ["task", id],
    queryFn: () => fetchSingleTask(id),
    refetchOnMount: false,
  });

  return (
    <>
      <p>{data?.text}</p>
      {isLoading && <p>Loading...</p>}
      {isError && <p>ERROR!!!</p>}
    </>
  );
}
