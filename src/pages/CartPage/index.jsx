import { useCart } from "../../providers/Cart";
import CartCard from "../../components/CartCard";
import Header from "../../components/Header";

import { MainContent, Container, Resume, InfoHeader, Title } from "./styles";

const CartPage = () => {
  const { newCart } = useCart();

  const totalPrice = newCart.reduce((acum, actual) => {
    return actual.price + acum;
  }, 0);

  return (
    <div>
      <Header />
      {newCart.length > 0 ? (
        <MainContent>
          <Container>
            <InfoHeader>
              <span>Produto</span>
              <span>Preço</span>
            </InfoHeader>

            {newCart.map((product, index) => (
              <CartCard product={product} key={index} />
            ))}
          </Container>
          <Resume>
            <h1>Resumo do pedido</h1>
            <div>
              <span>{newCart.length} produtos</span>
              <span>R$ {totalPrice.toFixed(2).replace(".", ",")}</span>
            </div>
            <button>Finalizar pedido</button>
          </Resume>
        </MainContent>
      ) : (
        <Title>Adicione produtos ao carrinho para vê-los aqui</Title>
      )}
    </div>
  );
};

export default CartPage;
