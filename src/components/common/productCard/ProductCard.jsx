import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CardActionArea from "@mui/material/CardActionArea";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import { useCart } from "../../../contexts/CartContext";

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();
  const handleAddToCart = () => {
    if (product.stock > 0) {
      addToCart(product);
    }
  };

  return (
    <Card
      sx={{
        maxWidth: 345,
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <CardActionArea
        component={Link}
        to={`/product/${product.id}`}
        sx={{ flexGrow: 1 }}
      >
        <CardMedia
          component="img"
          alt={product.title}
          height="200"
          image={product.imageUrl}
          sx={{
            objectFit: "cover",
            borderRadius: "5px",
          }}
        />
        <CardContent
          sx={{
            minWidth: "350px",
            backgroundColor: "#B0D3A5",
            minHeight: "200px",
          }}
        >
          <Typography gutterBottom variant="h5" component="div">
            {product.title}
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            {product.description}
          </Typography>
          <Typography variant="h6" component="div" sx={{ marginTop: "10px" }}>
            {product.price} USD
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions sx={{ backgroundColor: "#B0D3A5" }}>
        <Button onClick={handleAddToCart} size="small" color="#ECE5D1">
          Añadir al carrito
        </Button>
        <Button
          size="small"
          color="#ECE5D1"
          component={Link}
          to={`/product/${product.id}`}
        >
          Ver más
        </Button>
      </CardActions>
    </Card>
  );
};

export default ProductCard;
