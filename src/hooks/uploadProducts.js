import { db } from "../firebaseConfig";
import { collection, addDoc } from "firebase/firestore";

export const uploadProducts = async (products) => {
  const productsCollection = collection(db, "products");

  try {
    for (const product of products) {
      await addDoc(productsCollection, product);
      console.log(`Producto "${product.title}" subido correctamente.`);
    }
    console.log("Todos los productos han sido subidos.");
  } catch (error) {
    console.error("Error al subir los productos:", error);
  }
};
