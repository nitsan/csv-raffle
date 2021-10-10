FROM node:lts-alpine as builder

WORKDIR /app

COPY package*.json /app

RUN npm ci --prefer-offline --no-audit

COPY . /app

RUN npm run build:server

RUN npm run build

RUN npm prune --production

FROM node:lts-alpine

USER node

WORKDIR /app

COPY --chown=node:node --from=builder /app/dist ./dist
COPY --chown=node:node --from=builder /app/node_modules ./node_modules
COPY --chown=node:node package.json ./

EXPOSE 3000

ENTRYPOINT [ "npm", "start" ]
