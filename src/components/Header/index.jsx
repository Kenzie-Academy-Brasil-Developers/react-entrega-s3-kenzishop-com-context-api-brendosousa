import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { StyledHeader, Box, Button } from "./styles";
import { useHistory } from "react-router-dom";
import { useCart } from "../../providers/Cart";

const Header = () => {
  const history = useHistory();

  const handleCartPage = () => {
    return history.push("/cart");
  };

  const handleBackToMain = () => {
    return history.push("/");
  };

  const { newCart } = useCart();

  return (
    <StyledHeader>
      <h1 title="Voltar à página inicial" onClick={handleBackToMain}>
        <span>Kenzie</span>Shop
      </h1>
      <Box>
        <Button
          color="primary"
          aria-label="add to shopping cart"
          onClick={handleCartPage}
        >
          <AddShoppingCartIcon />
          {newCart.length > 0 && <div>{newCart.length}</div>}
          <h2>Carrinho</h2>
        </Button>
      </Box>
    </StyledHeader>
  );
};

export default Header;
