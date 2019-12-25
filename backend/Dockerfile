FROM node:12.9.1

# Create directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Install dependences
COPY package.json /usr/src/app/
# RUN npm install

ENV NODE_ENV=production

EXPOSE 3003