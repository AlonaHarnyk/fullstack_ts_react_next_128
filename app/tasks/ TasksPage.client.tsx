"use client";

import { fetchTasks } from "@/lib/tasks-service";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
import { useState } from "react";

export default function TasksClient() {
  const [search, setSearch] = useState("");
  const { data, isLoading, isError } = useQuery({
    queryKey: ["tasks", { search }],
    queryFn: () => fetchTasks(search),
    refetchOnMount: false,
  });

  return (
    <>
      <input
        type="text"
        name="search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      {data && data.length > 0 && (
        <ul>
          {data.map((task) => (
            <li key={task.id}>
              <Link href={`/tasks/${task.id}`}>{task.text}</Link>
            </li>
          ))}
        </ul>
      )}
      {isLoading && <p>Loading...</p>}
      {isError && <p>ERROR!!!</p>}
    </>
  );
}
