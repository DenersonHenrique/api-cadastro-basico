FROM node:12.9.1

# Create directory.
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Dependences.
COPY package.json /usr/src/app/

ENV NODE_ENV=production

EXPOSE 3003