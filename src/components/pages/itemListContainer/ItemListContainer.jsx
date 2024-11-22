import ProductList from "../../common/productsList/ProductList";
import { Box, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { db } from "../../../firebaseConfig";
import { collection, doc, getDocs, query, where } from "firebase/firestore";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
  const { name: categoryName } = useParams();
  const [items, setItems] = useState([]);

  useEffect(() => {
    // función para obtener productos de Firestore
    const fetchProducts = async () => {
      try {
        const productsCollection = collection(db, "products"); // referencia a la colección 'products'
        let productsQuery;

        // si existe una categoría en la URL, aplica el filtro
        if (categoryName) {
          productsQuery = query(
            productsCollection,
            where("category", "==", categoryName)
          );
        } else {
          productsQuery = productsCollection; // si no hay categoría, obtiene todos los productos
        }

        const querySnapshot = await getDocs(productsQuery); // ejecuta la consulta
        const arrayProducts = querySnapshot.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));

        setItems(arrayProducts); // actualiza el estado con los productos obtenidos
      } catch (error) {
        console.error("Error al obtener productos:", error);
      }
    };

    fetchProducts(); // llama a la función para obtener productos
  }, [categoryName]); // se vuelve a ejecutar cada vez que cambia la categoría

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

      <ProductList products={items} />
    </Box>
  );
};

export default ItemListContainer;
