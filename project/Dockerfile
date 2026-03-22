FROM node:20.17.0 AS builder

WORKDIR /usr/src/app

COPY package*.json ./
COPY tsconfig.json ./
RUN npm install

COPY . .
RUN npm run build

FROM node:20.17.0-alpine3.20

WORKDIR /usr/src/app

COPY --from=builder /usr/src/app/dist ./dist
COPY --from=builder /usr/src/app/package*.json ./

RUN npm install --production

EXPOSE 3000

CMD ["npm", "run", "start:prod"]
