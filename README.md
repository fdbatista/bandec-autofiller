Extensión para Google Chrome que permite autocompletar los formularios de inicio de sesión en el kiosco virtual de BANDEC.

INSTRUCCIONES:

Agregue un fichero con el nombre my-data.json en la carpeta data con la estructura siguiente, remplazando los valores de cada llave con la información del usuario.
En el caso de la matriz, actualice cada arreglo respetando el orden de las letras de la matriz de su tarjeta Bancamóvil.
Es decir, la primera fila corresponde a la letra A, la segunda a la B, la tercera a la C, y así sucesivamente hasta la J.

-----------------------------------------
{
    "matriz": [
        ["00", "00", "00", "00", "00", "00", "00", "00", "00", "00"],
		["00", "00", "00", "00", "00", "00", "00", "00", "00", "00"],
		["00", "00", "00", "00", "00", "00", "00", "00", "00", "00"],
		["00", "00", "00", "00", "00", "00", "00", "00", "00", "00"],
		["00", "00", "00", "00", "00", "00", "00", "00", "00", "00"],
		["00", "00", "00", "00", "00", "00", "00", "00", "00", "00"],
		["00", "00", "00", "00", "00", "00", "00", "00", "00", "00"],
		["00", "00", "00", "00", "00", "00", "00", "00", "00", "00"],
		["00", "00", "00", "00", "00", "00", "00", "00", "00", "00"],
		["00", "00", "00", "00", "00", "00", "00", "00", "00", "00"]
    ],
    "pin": ["0", "0", "0", "0"],
    "nombre": "JUAN PEREZ",
    "fecha": "03/2018",
    "clave": "MiClave",
    "tarjeta_cup": "9200023455669214",
    "tarjeta_cuc": "9200236547512358"
}
-----------------------------------------

Por el momento se debe usar la misma contraseña de acceso y fecha para ambas tarjetas.

¡IMPORTANTE!:
- No debe compartir su fichero my-data.json.
- Utilice esta extensión solo en su computadora personal.
