import { useCart } from "../../providers/Cart";
import { Container } from "./styles";

const CartCard = ({ product }) => {
  const { removeFromCart } = useCart();

  const handleRemoveFromCart = () => {
    removeFromCart(product);
  };

  return (
    <Container>
      <img src={product.image} alt={product.name} />
      <h1>{product.name}</h1>
      <span>R$ {product.price.toFixed(2)}</span>
      <button onClick={handleRemoveFromCart}>Remover</button>
    </Container>
  );
};

export default CartCard;
