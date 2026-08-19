// import { useState } from "react";
import css from "./SearchBox.module.css";

// export default function SearchBox() {
//   const [value, setValue] = useState("");
//   const handleChange = (
//     e: React.ChangeEvent<HTMLInputElement, HTMLInputElement>,
//   ) => {
//     setValue(e.target.value.toUpperCase());
//   };
//   const handleClear = () => {
//     setValue("");
//   };

//   return (
//     <>
//       <input
//         value={value}
//         type="text"
//         className={css.searchInput}
//         onChange={handleChange}
//       />
//       <button onClick={handleClear}>Clear</button>
//     </>
//   );
// }

interface SearchBoxProps {
  searhValue: string;
  onSearch: (value: string) => void;
}

export default function SearchBox({searhValue, onSearch}: SearchBoxProps) {
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement, HTMLInputElement>,
  ) => {
    onSearch(e.target.value)
  };

  return (
    <input
      defaultValue={searhValue}
      type="text"
      className={css.searchInput}
      onChange={handleChange}
    />
  );
}
