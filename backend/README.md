# Inicio

## Crear imagen
Ejecutar el comando en la raiz del proyecto.
`docker build -t veterinaria -f Dockerfile.dev .`

## Crear y ejecutar contenedor
`docker run --rm -it --name veterinariawebapi -p5103:5102 veterinaria`

## Probar Web API
`http://localhost:5103/swagger`
