import Image from "next/image";

export default function Home() {
  return (
    <>
      <h2>Home</h2>
      <Image
        src="/cat.webp"
        alt="cat"
        width={400}
        height={300}
        sizes="(max-width: 768px) 100wv, 50wv"
      />
      {/* <div style={{width: 400, height: 300, position: 'relative'}}>
        <Image src="/cat.webp" alt="cat" fill />
      </div> */}
    </>
  );
}
