import { notFound } from "next/navigation";

interface CarDataProps {
  params: Promise<{ slug: string[] }>;
}

export default async function CarData({ params }: CarDataProps) {
  const { slug } = await params;

//   // if (slug.length === 1) {
// https://otto-zimmermann.store/audi/
//   //   const modelsList = await getCarsByBrand(slug[0])
//   //   return <ModelsList models={modelsList }/>
//   // }

//   // if (slug.length === 2) {
// https://otto-zimmermann.store/audi/a1-8x1-8xk-z-05-2010-do-10-2018
//   //   const enginesList = await getEnginesByModel(slug[1]);
//   //   return <EnginesList engines={enginesList}/>;
//   // }

//   // if (slug.length === 3) {
// https://otto-zimmermann.store/audi/a1-8x1-8xk-z-05-2010-do-10-2018/1-0-tfsi
//   //   const engine = await getEngine(slug[2]);
//   //   return <Engine engine={engine} />;
//   // }

  notFound();
}
