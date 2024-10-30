import { Box, Typography, IconButton } from "@mui/material";
import SocialIcons from "../../common/socialIcons/SocialIcons";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "#A9D3A1", // Color verde claro
        color: "#2F3227", // Color oscuro para el texto
        padding: "20px 0",
        textAlign: "center",
      }}
    >
      {/* Texto Superior */}
      <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1 }}>
        SIGAMOS EN CONTACTO
      </Typography>

      {/* Íconos de Redes Sociales */}
      <Box>
        <SocialIcons />
      </Box>

      {/* Texto Inferior */}
      <Typography variant="body2" sx={{ marginTop: "15px" }}>
        2024 | The Wellfit Society © Todos los derechos reservados
      </Typography>
    </Box>
  );
};

export default Footer;
