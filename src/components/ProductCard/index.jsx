import { useCart } from "../../providers/Cart";
import { Container, Box } from "./styles";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

const ProductCard = ({ product }) => {
  const { newCart, addToCart } = useCart();

  const handleAddToCart = () => {
    if (newCart.includes(product)) {
      toast.error("Ops, só é possível adicionar um exemplar de cada");
    } else {
      addToCart(product);
    }
  };

  return (
    <Container>
      <img src={product.image} alt={product.name} />
      <Box>
        <h1>{product.name}</h1>
        <p>{product.author}</p>
        <span>R$ {product.price.toFixed(2).replace(".", ",")}</span>
        <button onClick={handleAddToCart}>Adicionar ao carrinho</button>
      </Box>
      <ToastContainer />
    </Container>
  );
};

export default ProductCard;
