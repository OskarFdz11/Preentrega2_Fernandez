import Grid from "@mui/material/Grid2";
import Typography from "@mui/material/Typography";
import ProductCard from "../productCard/ProductCard";

const ProductList = ({ products = [] }) => {
  return (
    <Grid
      container
      spacing={4}
      justifyContent="center"
      sx={{
        padding: "20px",
        flexWrap: "wrap",
        margin: "0 auto",
      }}
    >
      {products.length > 0 ? (
        products.map((product) => (
          <Grid
            item
            xs={12}
            sm={4}
            ms={4}
            key={product.id}
            sx={{
              display: "flex",
              justifyContent: "center",
              minWidth: "280px",
              flexGrow: 1,
            }}
          >
            <ProductCard product={product} />
          </Grid>
        ))
      ) : (
        <Typography variant="h6">No hay productos disponibles</Typography>
      )}
    </Grid>
  );
};

export default ProductList;
