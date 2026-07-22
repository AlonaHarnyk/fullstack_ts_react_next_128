import type { Cat } from "../../types";
import CatInfo from "../CatInfo/CatInfo";

interface CatsListProps {
  cats: Cat[];
}

export default function CatsList({ cats }: CatsListProps) {
  return (
    <ul>
      {cats.map((cat) => (
        <li key={cat.id}>
          {/* <p>{cat.name}</p>
          <p>Age: {cat.age}</p> */}
          <CatInfo cat={cat}/>
        </li>
      ))}
    </ul>
  );
}
