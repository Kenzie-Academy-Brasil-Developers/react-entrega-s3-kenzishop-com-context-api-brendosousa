import { useCart } from "../../providers/Cart";
import { Container, Box } from "./styles";

const CartCard = ({ product }) => {
  const { removeFromCart } = useCart();

  const handleRemoveFromCart = () => {
    removeFromCart(product);
  };

  return (
    <Container>
      <Box>
        <img src={product.image} alt={product.name} />
        <h1>{product.name}</h1>
        <span>R$ {product.price.toFixed(2)}</span>
      </Box>
      <button onClick={handleRemoveFromCart}>Remover</button>
    </Container>
  );
};

export default CartCard;
