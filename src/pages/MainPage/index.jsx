import { useProducts } from "../../providers/Products";

import Header from "../../components/Header";
import ProductCard from "../../components/ProductCard";

import { Main, Container } from "./styles";

const MainPage = () => {
  const { products } = useProducts();

  return (
    <Container>
      <Header />
      <Main>
        {products.map((product, index) => (
          <ProductCard product={product} key={index} />
        ))}
      </Main>
    </Container>
  );
};

export default MainPage;
