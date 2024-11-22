import * as React from "react";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid2";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Stack from "@mui/material/Stack";
import PropTypes from "prop-types";
import Typography from "@mui/material/Typography";

function Review({ cartItems, totalAmount, paymentInfo }) {
  return (
    <Stack spacing={2}>
      {/* Resumen del pedido */}
      <div>
        <Typography variant="subtitle2" gutterBottom>
          Resumen del pedido
        </Typography>
        <Grid container>
          {cartItems.map((item) => (
            <React.Fragment key={item.id}>
              <Stack
                direction="row"
                spacing={1}
                useFlexGap
                sx={{ width: "100%", mb: 1 }}
              >
                <Typography variant="body1" sx={{ color: "text.secondary" }}>
                  {item.title}
                </Typography>
                <Typography variant="body2">
                  {item.quantity} x ${item.price}
                </Typography>
              </Stack>
            </React.Fragment>
          ))}
        </Grid>
        <Typography variant="h6" sx={{ mt: 2 }}>
          Total: ${totalAmount.toFixed(2)}
        </Typography>
      </div>

      {/* Detalles de pago */}
      <div>
        <Typography variant="subtitle2" gutterBottom>
          Detalles del pago
        </Typography>
        <Grid container>
          {paymentInfo && paymentInfo.length > 0 ? (
            paymentInfo.map((payment) => (
              <React.Fragment key={payment.name}>
                <Stack
                  direction="row"
                  spacing={1}
                  useFlexGap
                  sx={{ width: "100%", mb: 1 }}
                >
                  <Typography variant="body1" sx={{ color: "text.secondary" }}>
                    {payment.name}
                  </Typography>
                  <Typography variant="body2">{payment.detail}</Typography>
                </Stack>
              </React.Fragment>
            ))
          ) : (
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              No hay detalles de pago disponibles.
            </Typography>
          )}
        </Grid>
      </div>
    </Stack>
  );
}

Review.propTypes = {
  cartItems: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      quantity: PropTypes.number.isRequired,
    })
  ).isRequired,
  totalAmount: PropTypes.number.isRequired,
  paymentInfo: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      detail: PropTypes.string.isRequired,
    })
  ),
};

export default Review;
