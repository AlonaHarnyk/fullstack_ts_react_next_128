import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import cats from "../../cats.json";
import CatInfo from "../CatInfo/CatInfo";
import CatsList from "../CatsList/CatsList";
// console.log(cats);

const data = cats[0];
const data1 = cats[1];

// console.log(cat);

export default function App() {
  return (
    <>
      <Header />
      <main>
        <CatsList cats={cats} />
        {/* <CatInfo cat={data} />
        <CatInfo cat={data1} /> */}
        {/* <ul>
          {cats.map((cat) => (
            <li key={cat.id}>
              <p>{cat.name}</p>
              <p>Age: {cat.age}</p>
            </li>
          ))}
        </ul> */}
        {/* <div>
          <h3>{cat.name}</h3>
          <p>Age: {cat.age}</p>
          <p>Email: {cat.email}</p>
        </div>
        <div>
          <h3>{cat1.name}</h3>
          <p>Age: {cat1.age}</p>
          <p>Email: {cat1.email}</p>
        </div> */}
      </main>
      <Footer />
    </>
  );
}
