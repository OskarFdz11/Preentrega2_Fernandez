import { useParams } from "react-router-dom";
import { products } from "../../../products";
import ProductList from "../../common/productsList/ProductList";
import { Typography, Box } from "@mui/material";

const CategoryPage = () => {
  const { categoryName } = useParams(); // Captura la categoría desde la URL
  const filteredProducts = products.filter(
    (product) => product.category.toLowerCase() === categoryName.toLowerCase()
  );

  return (
    <Box sx={{ padding: "20px", backgroundColor: "#2F3227" }}>
      <Typography
        color="#DAD7CB"
        textAlign={"center"}
        variant="h4"
        gutterBottom
      >
        {categoryName.charAt(0).toUpperCase() + categoryName.slice(1)} -
        Productos
      </Typography>
      {filteredProducts.length > 0 ? (
        <ProductList products={filteredProducts} />
      ) : (
        <Typography>No hay productos disponibles en esta categoría.</Typography>
      )}
    </Box>
  );
};

export default CategoryPage;
