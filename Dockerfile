FROM node:14.21.0-alpine as builder

RUN apk add chromium

ENV CHROME_BIN=/usr/bin/chromium-browser

WORKDIR /app

COPY package*.json /app

RUN npm ci --prefer-offline --no-audit

COPY /server /app/server

RUN npm run build:server

COPY /src /app/src

COPY ["angular.json", "tsconfig.json", "/app/"]

RUN npm run test

RUN npm run build

RUN npm prune --production

RUN rm -rf node_modules/@angular
RUN rm -rf node_modules/esbuild-*

FROM node:14.21.0-alpine

USER node

WORKDIR /app

COPY --chown=node:node --from=builder /app/dist ./dist
COPY --chown=node:node --from=builder /app/node_modules ./node_modules
COPY --chown=node:node package.json ./

EXPOSE 3000

ENTRYPOINT [ "npm", "start" ]
