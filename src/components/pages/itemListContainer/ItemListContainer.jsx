import ProductList from "../../common/productsList/ProductList";
import { Box, Typography } from "@mui/material";
import { products } from "../../../products";

const ItemListContainer = () => {
  return (
    <Box
      sx={{ backgroundColor: "#2F3227", padding: "20px", minHeight: "100vh" }}
    >
      <Typography
        variant="h3"
        sx={{ textAlign: "center", color: "#DAD7CB", marginBottom: "20px" }}
      >
        Nuestros productos
      </Typography>

      <ProductList products={products} />
    </Box>
  );
};

export default ItemListContainer;
