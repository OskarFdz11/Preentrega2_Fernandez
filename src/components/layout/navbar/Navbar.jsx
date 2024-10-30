import { Button } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { useCategories } from "../../../hooks/useCategories";
import { Link } from "react-router-dom";

const Navbar = () => {
  const categories = useCategories(); //custom hook para obtener las categorías con rutas
  return (
    <>
      <Grid
        container
        justifyContent="center"
        sx={{ backgroundColor: "#2F3227", padding: "10px 0" }}
      >
        {categories.map((category) => (
          <Grid item key={category.name} sx={{ margin: "0 10px" }}>
            <Link to={`${category.path}`} style={{ textDecoration: "none" }}>
              <Button sx={{ color: "#DAD7CB" }}>{category.name}</Button>
            </Link>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default Navbar;
