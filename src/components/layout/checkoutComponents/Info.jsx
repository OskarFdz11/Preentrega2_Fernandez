import * as React from "react";
import PropTypes from "prop-types";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import { Add, Remove } from "@mui/icons-material";
import WellfitIcon from "./WellfitIcon";

function Info({ cartItems, totalPrice, updateQuantity }) {
  const handleIncrease = (item) => {
    if (item.quantity < item.stock) {
      updateQuantity(item.id, item.quantity + 1, item.stock);
    }
  };

  const handleDecrease = (item) => {
    if (item.quantity > 1) {
      updateQuantity(item.id, item.quantity - 1, item.stock);
    }
  };
  return (
    <React.Fragment>
      <WellfitIcon />
      {/* Total del carrito */}
      <Typography variant="subtitle2" sx={{ color: "text.secondary" }}>
        Total
      </Typography>
      <Typography variant="h4" gutterBottom>
        ${totalPrice.toFixed(2)}
      </Typography>

      {/* Lista de productos en el carrito */}
      <List disablePadding>
        {cartItems.length > 0 ? (
          cartItems.map((item) => (
            <ListItem key={item.id} sx={{ py: 1, px: 0 }}>
              <ListItemText
                sx={{ mr: 2 }}
                primary={item.title}
                secondary={`Cantidad: ${item.quantity}`}
              />
              <Typography variant="body1" sx={{ fontWeight: "medium" }}>
                ${item.price * item.quantity.toFixed(2)}
              </Typography>
              <Box sx={{ display: "flex", alignItems: "center", ml: 2 }}>
                <IconButton
                  onClick={() => handleDecrease(item)}
                  disabled={item.quantity <= 1}
                >
                  <Remove />
                </IconButton>
                <Typography variant="body1" sx={{ mx: 1 }}>
                  {item.quantity}
                </Typography>
                <IconButton
                  onClick={() => handleIncrease(item)}
                  disabled={item.quantity >= item.stock}
                >
                  <Add />
                </IconButton>
              </Box>
            </ListItem>
          ))
        ) : (
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            No hay productos en el carrito.
          </Typography>
        )}
      </List>
    </React.Fragment>
  );
}

Info.propTypes = {
  cartItems: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      quantity: PropTypes.number.isRequired,
    })
  ).isRequired,
  totalPrice: PropTypes.number.isRequired,
  updateQuantity: PropTypes.number.isRequired,
};

export default Info;
