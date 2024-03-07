FROM node:21.5-alpine AS build

WORKDIR /app

COPY package*.json .

RUN npm ci 

COPY . .

RUN cat ./env-docker > ./.env

RUN npm run build

FROM nginx:alpine3.18 AS run

WORKDIR /usr/share/nginx/html

COPY --from=build /app/dist/ .

EXPOSE 80

CMD [ "nginx","-g","daemon off;" ]

