import { useParams } from "react-router-dom";
import ProductList from "../../common/productsList/ProductList";
import { Typography, Box } from "@mui/material";
import { useEffect, useState } from "react";
import { db } from "../../../firebaseConfig";
import { collection, getDocs, query, where } from "firebase/firestore";

const CategoryPage = () => {
  const { categoryName } = useParams(); // Captura la categoría desde la URL
  const [products, setProducts] = useState([]); // Estado para almacenar los productos
  const [loading, setLoading] = useState(true); // Estado para manejar la carga de datos

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        const productsCollection = collection(db, "products"); // Referencia a la colección 'products'
        const productsQuery = query(
          productsCollection,
          where("category", "==", categoryName)
        );

        const querySnapshot = await getDocs(productsQuery);
        const arrayProducts = querySnapshot.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));

        setProducts(arrayProducts);
      } catch (error) {
        console.error("Error al obtener productos:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [categoryName]); // Vuelve a ejecutar el efecto si cambia la categoría

  return (
    <Box
      sx={{ padding: "20px", backgroundColor: "#2F3227", minHeight: "100vh" }}
    >
      <Typography
        color="#DAD7CB"
        textAlign={"center"}
        variant="h4"
        gutterBottom
      >
        {categoryName.charAt(0).toUpperCase() + categoryName.slice(1)} -
        Productos
      </Typography>

      {loading ? (
        <Typography color="#DAD7CB" textAlign="center">
          Cargando productos...
        </Typography>
      ) : products.length > 0 ? (
        <ProductList products={products} /> // Pasa los productos de Firebase a ProductList
      ) : (
        <Typography color="#DAD7CB" textAlign="center">
          No hay productos disponibles en esta categoría.
        </Typography>
      )}
    </Box>
  );
};

export default CategoryPage;
