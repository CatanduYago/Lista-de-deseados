
# Proyecto de Lista de Deseos - Angular 14 & Bootstrap

Este es un proyecto de una aplicación web de **Lista de Deseos** (Wishlist) creada con **Angular 14** y **Bootstrap**. 
Los usuarios pueden agregar artículos a su lista de deseos, filtrarlos por tipo y tienda, ordenarlos por precio, y acceder 
a enlaces de compra directamente desde la aplicación. Además, se ofrece la funcionalidad de mover los artículos a una lista de "Comprados".

Este proyecto utiliza un backend basado en JSON que se ejecuta con el comando:

```bash
npx json-server --watch back-end/db.json
```

## Funcionalidades

- Filtrar artículos por tipo y tienda.
- Ordenar artículos por precio.
- Ver detalles y enlace de compra.
- Sección para artículos comprados.
- Sección para administrar las tallas de los artículos.

## Tecnologías Utilizadas

- [Angular 14](https://angular.io/)
- [Bootstrap](https://getbootstrap.com/)
- [Node.js](https://nodejs.org/)

## Requisitos

- Node.js (versión: 15.14.0)
- npm (gestor de paquetes de Node)
- Angular CLI 14.x

## Instalación

Sigue estos pasos para clonar y ejecutar el proyecto localmente:

### 1. Clonar el repositorio

```bash
git clone git@github.com:CatanduYago/wishlist-website.git
cd wishlist
```

### 2. Instalar dependencias

Una vez que estés dentro del directorio del proyecto, instala todas las dependencias necesarias con:

```bash
npm install
```

### 3. Iniciar el servidor de desarrollo

Instalar el cliente de Angular:

```bash
npm install -g @angular/cli@14
```

### 4. Ejecutar el servidor

Iniciar el servidor de desarrollo ejecutando:

```bash
ng serve
```

## Contribuciones

Si deseas contribuir al proyecto, puedes hacer un fork del repositorio y luego enviar un pull request con tus mejoras o correcciones.
