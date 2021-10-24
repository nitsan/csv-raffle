FROM node:14-alpine

WORKDIR /app

COPY package*.json /app

RUN npm ci --prefer-offline --no-audit

COPY . /app

RUN npm run build:server

RUN npm run build

RUN npm prune --production

EXPOSE 3000

ENTRYPOINT [ "npm", "start" ]
