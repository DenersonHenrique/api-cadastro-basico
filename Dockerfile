FROM node:8.11.1

WORKDIR /app

RUN npm install

ENV NODE_ENV=production

EXPOSE 3000