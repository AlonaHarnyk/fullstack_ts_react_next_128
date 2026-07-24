import { useState } from "react";

interface Tags {
  html: number;
  js: number;
  react: number;
}

export default function TagsWidget() {
  const [tags, setTags] = useState<Tags>({ html: 0, js: 0, react: 0 });

  //   const updateTag = (tag: keyof Tags) => {};
  const updateTag = (tagName: "html" | "js" | "react") => {
    setTags({ ...tags, [tagName]: tags[tagName] + 1 });
  };

  return (
    <>
      <button onClick={() => updateTag("html")}>Html: {tags.html}</button>
      <button onClick={() => updateTag("js")}>Js: {tags.js}</button>
      <button onClick={() => updateTag("react")}>React: {tags.react}</button>
    </>
  );
}
