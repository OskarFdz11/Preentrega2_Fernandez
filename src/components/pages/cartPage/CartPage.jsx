import { Box, Typography } from "@mui/material";

const CartPage = () => {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#333831",
      }}
    >
      <Typography variant="h3" component="h1" color="#ECE5D1">
        Carrito de Compras
      </Typography>
    </Box>
  );
};

export default CartPage;
