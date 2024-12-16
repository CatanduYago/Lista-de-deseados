
# Descripción 

Backend de aplicación de gestión de una lista de productos items.

# API Rest

Las APIs REST son APIs que se apoyan en el protocolo HTTP para proporcionar sus servicios. Se soportan las operaciones HTTP para operaciones convencionales. En estas APIs, una **URL representa un recurso**, **el método HTTP representa la operación** a realizar y el **código de estado representa el resultado**.

### Recursos

En este backend se ha incluido el siguiente recurso relacionado con la lista de productos items:

- http://localhost:3000/items: Lista de productos items.

Directrices para escoger el nombre de los recursos:

- Plural mejor que singular, para lograr uniformidad.
- URLs lo más cortas posibles.
- Evita guiones y guiones bajos.
- Deben ser semánticas para el cliente.
- Utiliza nombres y no verbos.

### Métodos/Operaciones

* **GET**: Permite cargar un recurso. Puede recibir los siguientes códigos como resultado:
  - 200 OK
  - 404 No encontrado

* **POST**: Permite crear un recurso. La petición no debe tener identificador ya que el recurso no existía en la base de datos. En la cabecera HTTP **Location** de la respuesta contendrá la URL para acceder al recurso recién creado. Puede devolver los siguientes códigos de resultado:
  - 201 Recurso creado correctamente
  - 400 Petición incorrecta
  - 403 Acceso prohibido
  - 500 Error en el servidor

* **PUT**: Actualiza todos los datos excepto el identificador. Puede devolver los siguientes códigos de resultado:
  - 200 Recurso actualizado correctamente
  - 201 Recurso creado correctamente
  - 400 Petición incorrecta
  - 403 Acceso prohibido
  - 500 Error en el servidor

* **PATCH**: Nuevo método. Permite actualizar solo una parte de los datos. No está soportado por todos los frameworks.

* **DELETE**: Elimina el recurso. Después de eliminarlo, los intentos de acceso deberían fallar. Puede devolver los siguientes resultados:
  - 200 OK
  - 404 No encontrado
  - 500 Error en el servidor

### CORS

Por motivos de seguridad, no es posible utilizar un backend alojado en otro dominio sin autorización previa, por lo que será necesario configurar CORS en el backend que estemos utilizando.

# Instalación del servidor

Será necesario instalar el paquete `json-server`. Podemos hacerlo utilizando alguno de los siguientes comandos:

Si utilizamos el proyecto suministrado, podemos utilizar el siguiente comando:

```cmd
C:> npm install
```

En un nuevo proyecto, podemos instalarlo en el directorio del proyecto con:

```cmd
C:> npm install --prefix=. json-server
```

# Ejecución del servidor

Para ejecutar el servidor, ejecuta el siguiente comando:

```shell
C:\....\> npx json-server --watch back-end/db.json
```

Esto iniciará el servidor y te mostrará la siguiente información en la consola:

```
Debugger listening on ws://127.0.0.1:64447/387eb498-c271-4ca5-84e9-42131547f1fe
For help, see: https://nodejs.org/en/docs/inspector
Debugger attached.

  \{^_^}/ hi!

  Loading db.json
  Done

  Resources
  http://localhost:3000/items
  
  Home
  http://localhost:3000

  Type s + enter at any time to create a snapshot of the database
  Watching...
```

Estas URLs se pueden utilizar para acceder a los recursos.

# Consultas

### Lista de items

- http://localhost:3000/items : Devuelve todos los productos items.
- http://localhost:3000/items?name=nombreProducto : Devuelve los productos que coinciden con el nombre.
- http://localhost:3000/items/1 : Devuelve el producto con ID = 1.

### Búsquedas

Con **gte** (mayor o igual) y **lte** (menor o igual), se pueden obtener resultados en un rango de valores.

```shell
http://localhost:3000/items?price_gte=50&price_lte=100
```

**ne** permite excluir un valor del resultado.

```shell
http://localhost:3000/items?id_ne=1
```

**like** permite buscar. Soporta expresiones regulares.

```shell
http://localhost:3000/items?name_like=Producto
```

También disponemos de búsqueda de texto completa con el parámetro **q**:

```shell
http://localhost:3000/items?q=Producto
```

### Ordenación

Podemos ordenar por diferentes campos:

```shell
http://localhost:3000/items?_sort=price&_order=asc
```

### Paginación

Para implementar la paginación, podemos utilizar URLs como las siguientes:

```shell
http://localhost:3000/items?_page=2&_limit=10
```

# Bibliografía

- API REST: https://juanda.gitbooks.io/webapps/content/api/arquitectura-api-rest.html
- json-server: https://github.com/typicode/json-server
