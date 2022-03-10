import { useCart } from "../../providers/Cart";
import { Container } from "./styles";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

const ProductCard = ({ product }) => {
  const { cart, addToCart } = useCart();

  const handleAddToCart = () => {
    if (cart.includes(product)) {
      toast.error("Ops, só é possível adicionar um exemplar de cada");
    } else {
      addToCart(product);
    }
  };

  return (
    <Container>
      <img src={product.image} alt={product.name} />
      <div>
        <h1>{product.name}</h1>
        <p>{product.author}</p>
        <span>R$ {product.price.toFixed(2)}</span>
        <button onClick={handleAddToCart}>Adicionar ao carrinho</button>
      </div>
      <ToastContainer />
    </Container>
  );
};

export default ProductCard;
