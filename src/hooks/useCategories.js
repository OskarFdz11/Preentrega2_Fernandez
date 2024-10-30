import { useMemo } from "react";

export const useCategories = () => {
  const categories = useMemo(
    () => [
      { name: "Ropa", path: "category/ropa" },
      { name: "Calzado Deportivo", path: "category/calzado-deportivo" },
      { name: "Accesorios", path: "category/accesorios" },
      {
        name: "Equipos de Entrenamiento",
        path: "category/equipos-de-entrenamiento",
      },
      { name: "Suplementos", path: "category/suplementos" },
    ],
    []
  );

  return categories;
};
