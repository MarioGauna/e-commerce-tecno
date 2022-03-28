# Proyecto Final React JS Coderhouse

##Proyecto E-Commerce Tienda electrónica Xgaming

- E-commerce desarrollado en React JS como parte del proyecto correspondiente al curso de CoderHouse.


# Desarrollado con:

- [Bootstrap v5.1.3](https://getbootstrap.com/ "Heading link")
- [react-multi-carousel v2.8.0](https://www.npmjs.com/package/react-multi-carousel "Heading link")
- [react-router](https://www.npmjs.com/package/react-router "Heading link")

# Navegacion y componentes
La navegación ocurre en todo momento utilizando el router de la librería react-router-dom

La navegacion del e-commerce la determina el componente Navbar que esta accesible durante toda la experiencia, este contiene, un Logo (que nos lleva al componente Home, en la ruta ' / '), un menu desplegable llamado Categorias que al desplegarse contiene los links a el listado completo ( en la ruta '/products' ) y a las diferentes categorias filtradas( en la ruta 'category/') y un carrito de compras IconCart (que se encuentra en la ruta '/cart' y nos lleva al componente Cart).

Home Contiene un carrusel con un pequeño listado de productos filtrados por  la categoria ofertas y un pequeño footer.

ListItems Contiene la llamada a firebase filtrando por category según el parámetro recibido como categoryId en la ruta /category/:categoryId y utilizando ListProducts para las vistas que son iguales. En estas vistas se muestra un listado de 3 productos.
Al hacer click en un producto del listado, navega a la ruta /detalle/:id y permite ver su descripción (imagen, precio, selector de cantidad de productos, un boton para comprar y un boton para el checkout (si se realiza)).

IconCart Se puede acceder en todo momento y tiene una indicación de la cantidad de items incluidos. Al clickearlo, dirige al componente Cart.

Cart Contiene el listado de productos seleccionados, la cantidad por producto elegido, la suma del precio de las unidades y la suma total de todos los productos, un boton para confirmar la compra, un boton para eliminar todo el listado de productos a comprar, y un boton mas que nos lleva devuelta al home para seguir comprando.


#Ejemplo de Funcionamiento


![]()



#Proyecto creado por:

Mario Alberto Gauna
