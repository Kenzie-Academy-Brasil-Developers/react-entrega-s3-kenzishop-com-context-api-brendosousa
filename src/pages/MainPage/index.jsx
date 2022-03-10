import { useProducts } from "../../providers/Products";

import Header from "../../components/Header";
import ProductCard from "../../components/ProductCard";

const MainPage = () => {
  const { products } = useProducts();

  return (
    <div>
      <Header />
      <ul>
        {products.map((product, index) => (
          <ProductCard product={product} key={index} />
        ))}
      </ul>
    </div>
  );
};

export default MainPage;
