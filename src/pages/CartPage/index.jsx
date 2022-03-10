import { useCart } from "../../providers/Cart";
import CartCard from "../../components/CartCard";
import Header from "../../components/Header";

const CartPage = () => {
  const { cart } = useCart();

  return (
    <div>
      <Header />
      {cart.length > 0 ? (
        <div>
          <div>
            {cart.map((product, index) => (
              <CartCard product={product} key={index} />
            ))}
          </div>
          <div>
            <h1>Resumo do pedido</h1>
            <div>
              <span>{cart.length} produtos</span>
              <span>R$</span>
            </div>
            <button>Finalizar pedido</button>
          </div>
        </div>
      ) : (
        <h1>Adicione produtos ao carrinho para vê-los aqui</h1>
      )}
    </div>
  );
};

export default CartPage;
