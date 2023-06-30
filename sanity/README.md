# Creacion y deply de schemas

* Crear un nuevo archivo en el directorio schemas con el nombre de tu schema ( ver demas schemas para la definicion del mismo)
* Agregar este nuevo schema en el archivo schema.ts en el array de types. (se debe importar el schema creado en el paso anterior y agregarlo al array)
* Para que esto se vea reflejado en la nube de sanity se debe realizar `sanity build` y luego `sanity deploy` (se debe tener instalado antes el cliente de sanity[agregar link a este parentesis del cliente en el futuro])

## Para deployar en grapql

* `sanity graphql deploy`