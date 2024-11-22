import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid2";
import Stack from "@mui/material/Stack";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Stepper from "@mui/material/Stepper";
import Typography from "@mui/material/Typography";
import ChevronLeftRoundedIcon from "@mui/icons-material/ChevronLeftRounded";
import ChevronRightRoundedIcon from "@mui/icons-material/ChevronRightRounded";
import AddressForm from "../../layout/checkoutComponents/AdressForm";
import Info from "../../layout/checkoutComponents/Info";
import InfoMobile from "../../layout/checkoutComponents/InfoMobile";
import PaymentForm from "../../layout/checkoutComponents/PaymentForm";
import Review from "../../layout/checkoutComponents/Review";
import AppTheme from "../../common/shared-theme/AppTheme";
import ColorModeIconDropdown from "../../common/shared-theme/ColorModeIconDropdown";
import { useContext, useState } from "react";
import { useCart } from "../../../contexts/CartContext";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const steps = ["Dirección de envío", "Detalles de pago", "Revisar pedido"];

function getStepContent(
  step,
  shippingInfo,
  setShippingInfo,
  cartItems,
  totalAmount,
  updateQuantity,
  paymentInfo
) {
  switch (step) {
    case 0:
      return (
        <AddressForm
          shippingInfo={shippingInfo}
          setShippingInfo={setShippingInfo}
          paymentInfo={paymentInfo}
        />
      );
    case 1:
      return <PaymentForm />;
    case 2:
      return (
        <Review
          cartItems={cartItems}
          totalAmount={totalAmount}
          paymentInfo={paymentInfo}
        />
      );
    default:
      throw new Error("Paso desconocido");
  }
}

export default function Checkout(props) {
  const { cartItems, totalAmount, updateQuantity, clearCart } = useCart();
  const [activeStep, setActiveStep] = useState(0);
  const [shippingInfo, setShippingInfo] = useState({});
  const [paymentInfo, setPaymentInfo] = useState([
    { name: "Tarjeta de crédito", detail: "**** **** **** 1234" },
    { name: "Fecha de expiración", detail: "04/2024" },
  ]);
  const navigate = useNavigate();

  const handleNext = () => {
    if (activeStep === 0 && !validateShippingInfo()) {
      toast.error("Por favor, completa los datos de envío antes de continuar.");
      return;
    }
    if (activeStep === 1 && cartItems.length === 0) {
      toast.error(
        "Tu carrito está vacío. Agrega productos antes de continuar."
      );
      return;
    }
    if (activeStep === steps.length - 1) {
      clearCart();
    }
    setActiveStep((prevStep) => prevStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevStep) => prevStep - 1);
  };

  const validateShippingInfo = () => {
    const { name, address, city, postalCode } = shippingInfo;
    return name && address && city && postalCode;
  };

  return (
    <AppTheme {...props}>
      <CssBaseline enableColorScheme />
      <Box sx={{ position: "fixed", top: "1rem", right: "1rem" }}>
        <ColorModeIconDropdown />
      </Box>

      <Grid
        container
        sx={{
          height: {
            xs: "100%",
            sm: "calc(100dvh - var(--template-frame-height, 0px))",
          },
          mt: {
            xs: 4,
            sm: 0,
          },
        }}
      >
        <Grid
          size={{ xs: 12, sm: 5, lg: 4 }}
          sx={{
            display: { xs: "none", md: "flex" },
            flexDirection: "column",
            backgroundColor: "background.paper",
            borderRight: { sm: "none", md: "1px solid" },
            borderColor: { sm: "none", md: "divider" },
            alignItems: "start",
            pt: 16,
            px: 10,
            gap: 4,
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              flexGrow: 1,
              width: "100%",
              maxWidth: 500,
            }}
          >
            <Info
              cartItems={cartItems}
              totalPrice={totalAmount}
              updateQuantity={updateQuantity}
            />
          </Box>
        </Grid>
        <Grid
          size={{ sm: 12, md: 7, lg: 8 }}
          sx={{
            display: "flex",
            flexDirection: "column",
            maxWidth: "100%",
            width: "100%",
            backgroundColor: { xs: "transparent", sm: "background.default" },
            alignItems: "start",
            pt: { xs: 0, sm: 16 },
            px: { xs: 2, sm: 10 },
            gap: { xs: 4, md: 8 },
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              flexGrow: 1,
              width: "100%",
              maxWidth: { sm: "100%", md: 600 },
              maxHeight: "720px",
              gap: { xs: 5, md: "none" },
            }}
          >
            {activeStep === steps.length ? (
              <Stack spacing={2} useFlexGap>
                <Typography variant="h1">📦</Typography>
                <Typography variant="h5">¡Gracias por tu pedido!</Typography>
                <Typography variant="body1" sx={{ color: "text.secondary" }}>
                  Tu número de pedido es
                  <strong>&nbsp;#140396</strong>. Te hemos enviado un correo de
                  confirmación y te notificaremos cuando sea enviado.
                </Typography>
                <Button
                  variant="contained"
                  sx={{ alignSelf: "start", width: { xs: "100%", sm: "auto" } }}
                  onClick={() => navigate("/")}
                >
                  Volver a la tienda
                </Button>
              </Stack>
            ) : (
              <React.Fragment>
                {getStepContent(
                  activeStep,
                  shippingInfo,
                  setShippingInfo,
                  cartItems,
                  totalAmount,
                  updateQuantity,
                  paymentInfo
                )}
                <Box
                  sx={{
                    display: "flex",
                    justifyContent:
                      activeStep === 0 ? "flex-end" : "space-between",
                    gap: 1,
                  }}
                >
                  {activeStep > 0 && (
                    <Button
                      startIcon={<ChevronLeftRoundedIcon />}
                      onClick={handleBack}
                      variant="text"
                    >
                      Atrás
                    </Button>
                  )}
                  <Button
                    variant="contained"
                    endIcon={<ChevronRightRoundedIcon />}
                    onClick={handleNext}
                  >
                    {activeStep === steps.length - 1
                      ? "Realizar pedido"
                      : "Siguiente"}
                  </Button>
                </Box>
              </React.Fragment>
            )}
          </Box>
        </Grid>
      </Grid>
    </AppTheme>
  );
}
