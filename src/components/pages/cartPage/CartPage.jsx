import { useContext } from "react";
import { CartContext } from "../../../contexts/CartContext";
import { Box, Typography, Button, TextField } from "@mui/material";

const CartPage = () => {
  const { cartItems, totalAmount, removeFromCart, updateQuantity, clearCart } =
    useContext(CartContext);

  return (
    <Box sx={{ padding: "20px" }}>
      <Typography variant="h4" gutterBottom>
        Carrito de Compras
      </Typography>
      {cartItems.length === 0 ? (
        <Typography>No hay productos en el carrito.</Typography>
      ) : (
        <>
          {cartItems.map((item) => (
            <Box key={item.id} sx={{ marginBottom: "10px" }}>
              <Typography variant="h6">{item.title}</Typography>
              <Typography>Precio: ${item.price}</Typography>
              <Typography>Stock disponible: {item.stock}</Typography>
              <TextField
                type="number"
                label="Cantidad"
                value={item.quantity}
                onChange={(e) =>
                  updateQuantity(
                    item.id,
                    parseInt(e.target.value, 10),
                    item.stock
                  )
                }
                sx={{ width: "80px", marginRight: "10px" }}
              />
              <Button
                onClick={() => removeFromCart(item.id)}
                color="secondary"
                variant="contained"
              >
                Eliminar
              </Button>
            </Box>
          ))}
          <Typography variant="h5" sx={{ marginTop: "20px" }}>
            Total: ${totalAmount}
          </Typography>
          <Button onClick={clearCart} variant="contained" color="primary">
            Vaciar Carrito
          </Button>
        </>
      )}
    </Box>
  );
};

export default CartPage;
