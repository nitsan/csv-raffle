FROM node:14-alpine as builder

WORKDIR /app

COPY package*.json /app

RUN npm ci --prefer-offline --no-audit

COPY /server /app/server

RUN npm run build:server

COPY /src /app/src

COPY ["angular.json", "tsconfig.json", "/app/"]

RUN npm run build

RUN npm prune --production

FROM node:14-alpine

WORKDIR /app

COPY --from=builder /app/dist ./dist
COPY --from=builder /app/node_modules ./node_modules
COPY package.json ./

EXPOSE 3000

ENTRYPOINT [ "npm", "start" ]
