import Routes from "./routes";
import { ProductsProvider } from "./providers/products";

function App() {
  return (
    <>
      <ProductsProvider>
        <Routes />
      </ProductsProvider>
    </>
  );
}

export default App;
