import { Button } from "@mui/material";
import Grid from "@mui/material/Grid2";

const categories = [
  "Ropa",
  "Calzado Deportivo",
  "Accesorios",
  "Equipos de Entrenamiento",
  "Suplementos",
  "Ofertas",
  "Novedades",
];

const Navbar = () => {
  return (
    <>
      <Grid
        container
        justifyContent="center"
        sx={{ backgroundColor: "#2F3227", padding: "10px 0" }}
      >
        {categories.map((category) => (
          <Grid item key={category} sx={{ margin: "0 10px" }}>
            <Button sx={{ color: "#DAD7CB" }}>{category}</Button>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default Navbar;
