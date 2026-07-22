import type { Cat } from "../../types";
import styles from "./CatInfo.module.css";
import clsx from "clsx";
// console.log(styles)

interface CatInfoProps {
  cat: Cat;
}

export default function CatInfo({ cat }: CatInfoProps) {

  const infoClass = clsx(styles.info, cat.available ? styles.available : styles.taken)


  return (
    <div>
      <h3 className={styles.name}>{cat.name}</h3>
      <p className={styles.age}>Age: {cat.age}</p>
      <p>Email: {cat.email}</p>
      <p
        className={infoClass}
        // className={`${styles.info} ${cat.available ? styles.available : ""} ${!cat.available ? styles.taken : ""}`}
      >
        Available: {cat.available ? "Yes" : "No"}
      </p>
    </div>
  );
}

// export default function CatInfo({ cat: {name, age, email} }) {
//   return (
//     <div>
//       <h3>{name}</h3>
//       <p>Age: {age}</p>
//       <p>Email: {email}</p>
//     </div>
//   );
// }
