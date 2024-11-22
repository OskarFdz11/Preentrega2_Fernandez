import { useParams } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import { useCart } from "../../../contexts/CartContext";
import { db } from "../../../firebaseConfig";
import { doc, getDoc } from "firebase/firestore";
import { Box, Typography, Button, CardMedia } from "@mui/material";
import Grid from "@mui/material/Grid2";

const ProductDetailPage = () => {
  const { id } = useParams();
  const { addToCart } = useCart();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      const productRef = doc(db, "products", id);
      const productSnap = await getDoc(productRef);
      if (productSnap.exists()) {
        setProduct({ id: productSnap.id, ...productSnap.data() });
      }
    };
    fetchProduct();
  }, [id]);

  const handleAddToCart = () => {
    if (product.stock > 0) {
      addToCart(product);
    }
  };

  if (!product) {
    return <Typography variant="h6">Producto no encontrado</Typography>;
  }

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "20px",
        minHeight: "calc(100vh - 200px)",
        backgroundColor: "#333831",
      }}
    >
      <Grid container spacing={4} maxWidth="md">
        <Grid item xs={2}>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
            {[product.imageUrl, product.imageUrl, product.imageUrl].map(
              (img, index) => (
                <CardMedia
                  key={index}
                  component="img"
                  image={img}
                  alt={`Thumbnail ${index + 1}`}
                  sx={{
                    width: "60px",
                    height: "60px",
                    borderRadius: "5px",
                    border: "1px solid #ddd",
                    cursor: "pointer",
                    transition: "0.3s",
                    "&:hover": { transform: "scale(1.05)" },
                  }}
                />
              )
            )}
          </Box>
        </Grid>

        <Grid item xs={5}>
          <CardMedia
            component="img"
            image={product.imageUrl}
            alt={product.title}
            sx={{
              borderRadius: "10px",
              boxShadow: "0px 4px 12px rgba(0,0,0,0.2)",
              width: "100%",
              maxHeight: "300px",
              objectFit: "contain",
            }}
          />
        </Grid>

        <Grid color={"#ECE5D1"} item xs={5}>
          <Typography variant="overline" sx={{ color: "#E4F0CD" }}>
            {product.category.toUpperCase()}
          </Typography>
          <Typography variant="h5" sx={{ fontWeight: "bold", mb: 1 }}>
            {product.title}
          </Typography>
          <Typography variant="body2" sx={{ color: "#E4F0CD", mb: 2 }}>
            {product.description}
          </Typography>
          <Typography variant="h6" sx={{ fontWeight: "bold", mb: 4 }}>
            ${product.price}
          </Typography>
          <Typography variant="body2" sx={{ color: "#E4F0CD", mb: 2 }}>
            Stock disponible: {product.stock}
          </Typography>
          <Button
            onClick={handleAddToCart}
            variant="contained"
            color="primary"
            size="large"
            fullWidth
            sx={{
              borderRadius: "20px",
              fontWeight: "bold",
              padding: "10px",
              maxWidth: "300px",
              marginTop: "20px",
            }}
          >
            AGREGAR AL CARRITO
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ProductDetailPage;
