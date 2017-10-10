# Prueba de More
El proyecto esta realizado en angular 1.5

Para que pase correctamente el candidato este examen, necesita realizar lo siguiente:

### Paso 1

*En caso de conocer github, realizar un fork y trabajar en esa copia.*
 
 Descargar el repositorio donde encontrarán la siguiente estructura:
 
```
- app
 -- allProducts
 ----- allProductsView.html
 ----- allProductsController.js
 -- newProducs
 ----- newProducsView.html
 ----- newProducsController.js
```

Es una simple estructura adaptada de [angular-seed](https://github.com/angular/angular-seed).

### Paso 2

Para correr el proyecto solo es necesario entrar a la carpeta  `cd test_angularjs`, hacer `npm install` y `bower install`

Esto nos correrá el proyecto en el puerto `8000`

# Tareas a realizar

## Resolución de Errores
El proyecto tiene errores para que el candidato los resuelva y así poder empezar a realizar la prueba.

__¡De preferencia crea un issue para cada error que detectes!__

En caso de que no puedas resolver los errores puedes realizar las tareas con el framework que prefieras (React.js, Vue.js, polymer, aurelia, ember)

## Tarea 1

Generar un servicio que consuma la directiva de `$http` (`fetch` en aurelia, `iron-ajax` en polymer etc.) y así poderla utilizarla para obtener la información JSON del siguiente mock: http://demo6292426.mockable.io/more-store

## Tarea 2

Hacer vista de todos los productos, con ordenamientos en los siguientes campos:

```
provider - este debe de tener ASC y DESC
nameOfProduct - Este no tiene orden
range - de menor a mayor
price - de menor a mayor
isActive - este debe de tener ASC y DESC
```

__IMPORTANTE__

No se podrá utilizar la función definida como `sort` ni el `order by` desde angular, ni ningun plugin parecido como Ramda.js, undescore.js, backbone.js.

__SOLO ESTA PERMITIDO REALIZAR JS NATIVO PARA CADA ORDENAMIENTO__

## Tarea 3

Debido a que no se tiene la API Rest que nos ayude con la parte del SAVE de un nuevo producto, vamos a optar por simular esta paso con el `localStorage`.
Un producto esta definido por las siguientes caracteristicas:

```json
"range": "2.21",
"tags": [
  "bestseller",
  "new"
],
"description": "Sunt officia nulla culpa fugiat do. Irure Lorem",
"nameOfProduct": "refrigerador 35\"",
"provider": "samsung",
"sku": "62eef4b1-c205-40cc-ad56-c85294ab4398",
"picture": "http://placehold.it/32x32",
"price": "$27,350.64",
"isActive": true,
"id": "59dd10cd23d70ccda6787227"
```

Tomando esto en cuenta en la vista de `newProduct` agregar todos los campos necesarios para dar de alta un nuevo producto y darlo de alta en el `localStorage` realizando la simulación de que el usuario guarde el nuevo producto.