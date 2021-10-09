FROM node:lts-alpine

WORKDIR /app

COPY package*.json /app

RUN npm i

COPY . /app

RUN npm run build:server

RUN npm run build

EXPOSE 3000

ENTRYPOINT [ "npm", "start" ]
