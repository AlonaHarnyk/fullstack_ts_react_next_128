// import { useEffect, useState } from "react";
// import { fetchPerson, type Person } from "../services/swapiService";

// export default function SwapiExample() {
//   const [count, setCount] = useState(0);
//   const [person, setPerson] = useState<Person | null>(null);
//   const [isLoading, setIsLoading] = useState(false);
//   const [isError, setIsError] = useState(false);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         setIsError(false);
//         setIsLoading(true);
//         const person = await fetchPerson(count);
//         setPerson(person);
//       } catch {
//         setIsError(true);
//       } finally {
//         setIsLoading(false);
//       }
//     };

//     if (count > 0) {
//       fetchData();
//     }
//   }, [count]);

//   return (
//     <div>
//       <button onClick={() => setCount(count + 1)}>
//         Fetch next character with ID {count + 1}
//       </button>
//       {isLoading && <strong>Loading...</strong>}
//       {isError && <strong>Error!</strong>}
//       {person && (
//         <>
//           <p>{person.name}</p>
//           <p>Weight: {person.mass}</p>
//           <p>Height: {person.height}</p>
//         </>
//       )}
//     </div>
//   );
// }

import { useState } from "react";
import { fetchPerson } from "../services/swapiService";
import { useQuery } from "@tanstack/react-query";

export default function SwapiExample() {
  const [count, setCount] = useState(0);

  const {
    data: person,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["person", count],
    queryFn: () => fetchPerson(count),
    // retry: 1,
    enabled: count > 0,
    // refetchOnWindowFocus: true,
    // staleTime: 5000
    // gcTime: 2000 
  });


  return (
    <div>
      <button onClick={() => setCount(count + 1)}>
        Fetch next character with ID {count + 1}
      </button>
      {isLoading && <strong>Loading...</strong>}
      {isError && <strong>Error!</strong>}
      {person && (
        <>
          <p>{person.name}</p>
          <p>Weight: {person.mass}</p>
          <p>Height: {person.height}</p>
        </>
      )}
    </div>
  );
}
