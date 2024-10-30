# Proyecto React - E-commerce Navbar y Header

Este proyecto es una aplicación e-commerce construida con React, Vite, Material UI y enrutamiento con **React Router**. Permite a los usuarios explorar categorías de productos, ver los detalles de cada producto. 

## Tecnologías utilizadas

- **React**: Framework de JavaScript para construir la interfaz de usuario.
- **Material UI**: Librería de componentes de UI que permite estilos consistentes y personalizables.
- **React Router**: Para manejar las rutas y navegación dentro de la aplicación.

---

## Estructura de Componentes

### 1. **Header** y **Footer**

- **Header**: Incluye el logo, un menú de categorías y un ícono de carrito de compras.
  - El ícono del carrito redirige a la ruta `/cart`, que muestra la página del carrito de compras.
  - Implementación con `IconButton` de Material UI.
  
- **Footer**: Contiene iconos de redes sociales y un mensaje de derechos de autor.
  - Se utilizó el componente `SocialIcons` con íconos de Material UI.

### 2. **Navbar**

- Contiene un menú de navegación con categorías mapeadas dinámicamente.
- Utiliza `react-router-dom` para redirigir a cada categoría según el enlace de `Link`.
- Implementación de estilos con **Material UI** y componentes `Grid` y `Button`.

### 3. **SocialIcons**

- Componente independiente que encapsula los iconos de redes sociales.
- Utiliza iconos de Material UI para Facebook, Instagram, YouTube y Pinterest.
- Se usa en el footer para un fácil acceso a las redes sociales.

---

## Páginas y Funcionalidades

### 1. **ItemListContainer**

- Página de inicio que muestra una lista de productos disponibles.
- Los productos se muestran en un componente `ProductList`, el cual mapea cada producto en una `ProductCard`.

### 2. **ProductList y ProductCard**

- **ProductList**: Mapea y renderiza una lista de productos usando el componente `ProductCard`.
- **ProductCard**: Muestra la información básica de cada producto, incluyendo imagen, título, descripción breve y precio.
  - Implementado con `Card`, `CardMedia`, `CardContent` y `CardActions` de **Material UI**.
  - Las tarjetas son responsivas y mantienen un tamaño consistente gracias a estilos personalizados de Material UI.

### 3. **CategoryPage**

- Página que muestra los productos de una categoría específica.
- Captura el nombre de la categoría desde la URL mediante `useParams` de `react-router-dom`.
- Filtra los productos por categoría y los renderiza usando `ProductList`.

### 4. **ProductDetailPage**

- Muestra la información detallada de un producto específico.
- Captura el `id` del producto desde la URL y busca el producto correspondiente.
- Estructura de diseño visualmente agradable con la imagen del producto, título, descripción y precio.
- Botón de "Agregar al carrito" estilizado.

### 5. **CartPage**

- Página simple que muestra el título "Carrito de Compras".
- Se accede desde el ícono del carrito en el header.
- Implementada con `Typography` y `Box` de Material UI para centrado y estilos básicos.

---

## Enrutamiento (Routing)

El enrutamiento de la aplicación está configurado con **React Router**:

- `/`: Muestra el `ItemListContainer` con todos los productos.
- `/category/:categoryName`: Muestra el `CategoryPage` filtrando los productos por la categoría seleccionada.
- `/product/:id`: Muestra el `ProductDetailPage` para ver detalles de un producto específico.
- `/cart`: Muestra la `CartPage`, que representa el carrito de compras del usuario.
