import ProductCard from "../../components/ProductCard";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { useHistory } from "react-router-dom";

const MainPage = () => {
  const history = useHistory();

  const handleCartPage = () => {
    return history.push("/cart");
  };

  return (
    <div>
      <header>
        <h1>
          <span>Kenzie</span>Shop
        </h1>
        <div>
          <button>
            <AddShoppingCartIcon />
            <h2>Carrinho</h2>
          </button>
        </div>
      </header>

      <main></main>
    </div>
  );
};

export default MainPage;
