import { useEffect } from "react";
import { uploadProducts } from "../../hooks/uploadProducts";
import { products } from "../../products"; // Asegúrate de importar el array de productos

const UploadProducts = () => {
  useEffect(() => {
    // Llama a la función para subir productos
    uploadProducts(products);
  }, []);

  return (
    <div>
      <h2>Subiendo productos a Firestore...</h2>
    </div>
  );
};

export default UploadProducts;
