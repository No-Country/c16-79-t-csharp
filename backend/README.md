# Inicio

## Antes de iniciar los contenedore eliminar las imagenes anteriores con:
`docker compose -f docker-compose-dev.yml down --rmi all -v`

## Ejecucion con docker compose en modo desarrollo
`docker compose -f docker-compose-dev.yml up`

## Probar Web Api
`http://localhost:5104/hc`
`http://localhost:5104/swagger`
