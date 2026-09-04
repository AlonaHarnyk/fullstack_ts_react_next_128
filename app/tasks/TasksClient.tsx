"use client";

import { fetchTasks } from "@/lib/tasks-api";
import { selectLang, useLangStore } from "@/stores/languageStore";
import { useQuery } from "@tanstack/react-query";

export default function TasksClient() {
  const lang = useLangStore(selectLang);

  // console.log("language", lang);

  const { data: tasks } = useQuery({
    queryKey: ["tasks"],
    queryFn: fetchTasks,
    refetchOnMount: false,
  });

  return (
    <>
      <p>Language: {lang}</p>
      {tasks && tasks.length > 0 && (
        <ul>
          {tasks.map((task) => (
            <li key={task.id}>
              <p>{task.text}</p>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
