# Proyecto React - E-commerce Navbar y Header

Este proyecto es una aplicación e-commerce construida con React, Vite, y Material UI. Implementa un `Navbar` para la navegación entre categorías de productos y un `Header` con íconos de redes sociales, un carrito de compras con contador, y un botón de login.

## Componentes principales

### `Header`
El componente `Header` contiene:
- Íconos de redes sociales.
- Un logo centrado.
- Un ícono de carrito de compras con un contador que indica la cantidad de productos.

### `CartWidget`
Este componente incluye:
- Un ícono de carrito de compras con un contador personalizado.
- Un ícono de login con el texto "Login" debajo, alineado verticalmente.
- Espaciado ajustado entre los íconos para una mejor presentación.

### `Navbar`
- El componente `Navbar` genera dinámicamente las categorías de productos utilizando el método `map`.
- Cada categoría se renderiza como un botón dentro de un sistema de cuadrícula (`Grid`) proporcionado por Material UI.

## Estilos y diseño
- **Material UI Grid**: Se usa para la estructura y alineación.
- **Colores**: Íconos en color `#ECE5D1` sobre un fondo oscuro (`#333831`).
- **Espaciado**: Se ajustan los márgenes entre íconos para mantener uniformidad visual.
