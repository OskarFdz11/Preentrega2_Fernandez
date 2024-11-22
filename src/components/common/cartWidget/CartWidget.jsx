import { useContext } from "react";
import { useCart } from "../../../contexts/CartContext";
import { IconButton, Badge, Box, Typography } from "@mui/material";
import { ShoppingCart, AccountCircle } from "@mui/icons-material";
import { Link, useNavigate } from "react-router-dom";

const CartWidget = () => {
  const { cartItems } = useCart(); // Usa el contexto para obtener cartItems
  const navigate = useNavigate();

  // Calcula el número total de productos en el carrito
  const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        {/* Carrito */}
        <Link
          to="/cart"
          onClick={() => navigate("/cart")}
          style={{ color: "inherit" }}
        >
          <IconButton color="inherit" sx={{ mx: 1 }}>
            <Badge
              badgeContent={totalItems}
              sx={{
                "& .MuiBadge-badge": {
                  backgroundColor: "#E4F0CD",
                },
              }}
            >
              <ShoppingCart sx={{ color: "#ECE5D1", fontSize: "30px" }} />
            </Badge>
          </IconButton>
        </Link>

        {/* Ícono de perfil o login */}
        <Box sx={{ textAlign: "center", mx: 1 }}>
          <IconButton color="inherit">
            <AccountCircle sx={{ color: "#ECE5D1", fontSize: "30px", mx: 1 }} />
            <Typography variant="caption" sx={{ color: "#ECE5D1" }}>
              Login
            </Typography>
          </IconButton>
        </Box>
      </Box>
    </>
  );
};

export default CartWidget;
