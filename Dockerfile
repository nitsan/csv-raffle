FROM node:lts-alpine as builder

WORKDIR /app

COPY package*.json /app

RUN npm ci --prefer-offline --no-audit

COPY . /app

RUN npm run build:server

RUN npm run build

RUN npm prune --production

FROM node:lts-alpine

WORKDIR /app

COPY --from=builder /app/dist ./dist
COPY --from=builder /app/node_modules ./node_modules
COPY package.json ./

EXPOSE 3000

ENTRYPOINT [ "npm", "start" ]
