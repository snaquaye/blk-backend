FROM node:20-alpine

RUN apk add --no-cache bash

WORKDIR /app

COPY package*.json ./

RUN npm ci

COPY . .

EXPOSE 1337

CMD ["npm", "run", "develop"]