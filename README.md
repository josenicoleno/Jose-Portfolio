Trabajo final -> José Nicoleno
### `npm start`
Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

Se instalaron las siguientes librerías para hacer funcionar la apliación: 
 ### `npm install react-router-dom` -> Para manejar el ruteo de la aplicación 
 ### `npm install react-router` -> También para manejar 
 ### `npm install firebase` -> Para administrar los datos de la base de datos Firebase 

Las siguientes referencias se pusieron en el archivo index.html:
ícono de la aplicación
### <link rel="icon" href="https://w7.pngwing.com/pngs/694/634/png-transparent-porky-s-lechon-barbecue-porky-s-lechon-barbecue-restaurant-domestic-pig-barbecue.png" />

librerías de css boostrap
### <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">

íconos de fontawesome     
### <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.5.0/css/all.css" integrity="sha384-B4dIYHKNBt8Bc12p+WXckhzcICo0wtJAoU8YZTY5qE0Id1GSseTk6S+L3BlXeVIU" crossorigin="anonymous">                       

La base de datos tiene la siguiente estructura: 
productos(id, titulo, categorias, precio)
categorias(id, categoria)
carrito(id, titulo, categorias, precio, cantidad)
