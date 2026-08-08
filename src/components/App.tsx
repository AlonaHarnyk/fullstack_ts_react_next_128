import OrderForm from "./OrderForm";

export default function App() {
  return (
    <>
      <OrderForm />
      {/* <Parent>
        {(value) => <div>Test: {value}</div>}
      </Parent> */}
      {/* <Parent>{(value) => <p>{value}</p>}</Parent> */}
    </>
  );
}

// function Parent({ children }) {
//   const value = "book";
//   return <section>{children(value)}</section>;
// }
