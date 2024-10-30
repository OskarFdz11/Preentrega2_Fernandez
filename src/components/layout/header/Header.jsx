import Grid from "@mui/material/Grid2";
import CartWidget from "../../common/cartWidget/CartWidget";
import SocialIcons from "../../common/socialIcons/SocialIcons";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <Grid
        container
        justifyContent="space-around"
        alignItems="center"
        sx={{ backgroundColor: "#333831", padding: "10px 0px" }}
      >
        {/* Social Icons */}
        <Grid item xs={3} md={3}>
          <SocialIcons sx={{ fontSize: "30px" }} />
        </Grid>

        {/* Logo */}
        <Grid item xs={5} md={6} sx={{ textAlign: "center" }}>
          <Link to="/" style={{ textDecoration: "none" }}>
            <img
              src="https://res.cloudinary.com/dnbxhmpkd/image/upload/v1728405015/logo_horizontal_pi8iib.png"
              alt="Logo"
              style={{ height: "50px" }}
            />
          </Link>
        </Grid>

        {/* Cart Widget */}
        <Grid item xs={3} md={3}>
          <CartWidget sx={{ fontSize: "30px" }} />
        </Grid>
      </Grid>
    </>
  );
};

export default Header;
