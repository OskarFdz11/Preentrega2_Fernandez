import * as React from "react";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";
import Grid from "@mui/material/Grid2";
import OutlinedInput from "@mui/material/OutlinedInput";
import { styled } from "@mui/system";

const FormGrid = styled(Grid)(() => ({
  display: "flex",
  flexDirection: "column",
}));

export default function AddressForm({ shippingInfo, setShippingInfo }) {
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setShippingInfo((prevInfo) => ({ ...prevInfo, [name]: value }));
  };

  return (
    <Grid container spacing={3}>
      <FormGrid size={{ xs: 12, md: 6 }}>
        <FormLabel htmlFor="first-name" required>
          Nombre
        </FormLabel>
        <OutlinedInput
          id="first-name"
          name="name"
          type="text"
          placeholder="Juan"
          autoComplete="first-name"
          required
          size="small"
          value={shippingInfo.name || ""}
          onChange={handleInputChange}
        />
      </FormGrid>
      <FormGrid size={{ xs: 12, md: 6 }}>
        <FormLabel htmlFor="last-name" required>
          Apellido
        </FormLabel>
        <OutlinedInput
          id="last-name"
          name="lastName"
          type="text"
          placeholder="Pérez"
          autoComplete="last-name"
          required
          size="small"
          value={shippingInfo.lastName || ""}
          onChange={handleInputChange}
        />
      </FormGrid>
      <FormGrid size={{ xs: 12 }}>
        <FormLabel htmlFor="address1" required>
          Dirección Línea 1
        </FormLabel>
        <OutlinedInput
          id="address1"
          name="address"
          type="text"
          placeholder="Nombre de la calle y número"
          autoComplete="address-line1"
          required
          size="small"
          value={shippingInfo.address || ""}
          onChange={handleInputChange}
        />
      </FormGrid>
      <FormGrid size={{ xs: 12 }}>
        <FormLabel htmlFor="address2">Dirección Línea 2</FormLabel>
        <OutlinedInput
          id="address2"
          name="address2"
          type="text"
          placeholder="Apartamento, suite, unidad, etc. (opcional)"
          autoComplete="address-line2"
          size="small"
          value={shippingInfo.address2 || ""}
          onChange={handleInputChange}
        />
      </FormGrid>
      <FormGrid size={{ xs: 6 }}>
        <FormLabel htmlFor="city" required>
          Ciudad
        </FormLabel>
        <OutlinedInput
          id="city"
          name="city"
          type="text"
          placeholder="Ciudad"
          autoComplete="city"
          required
          size="small"
          value={shippingInfo.city || ""}
          onChange={handleInputChange}
        />
      </FormGrid>
      <FormGrid size={{ xs: 6 }}>
        <FormLabel htmlFor="state" required>
          Estado
        </FormLabel>
        <OutlinedInput
          id="state"
          name="state"
          type="text"
          placeholder="Estado"
          autoComplete="state"
          required
          size="small"
          value={shippingInfo.state || ""}
          onChange={handleInputChange}
        />
      </FormGrid>
      <FormGrid size={{ xs: 6 }}>
        <FormLabel htmlFor="zip" required>
          Código Postal
        </FormLabel>
        <OutlinedInput
          id="zip"
          name="postalCode"
          type="text"
          placeholder="12345"
          autoComplete="postal-code"
          required
          size="small"
          value={shippingInfo.postalCode || ""}
          onChange={handleInputChange}
        />
      </FormGrid>
      <FormGrid size={{ xs: 6 }}>
        <FormLabel htmlFor="country" required>
          País
        </FormLabel>
        <OutlinedInput
          id="country"
          name="country"
          type="text"
          placeholder="México"
          autoComplete="country"
          required
          size="small"
          value={shippingInfo.country || ""}
          onChange={handleInputChange}
        />
      </FormGrid>
      <FormGrid size={{ xs: 12 }}>
        <FormControlLabel
          control={
            <Checkbox
              name="useForPayment"
              checked={shippingInfo.useForPayment || false}
              onChange={(event) =>
                setShippingInfo((prevInfo) => ({
                  ...prevInfo,
                  useForPayment: event.target.checked,
                }))
              }
            />
          }
          label="Usar esta dirección para los detalles de pago"
        />
      </FormGrid>
    </Grid>
  );
}
