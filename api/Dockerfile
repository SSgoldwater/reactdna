# Base image
FROM node:8.9.0

COPY ./server.js ./server.js
COPY ./package.json ./package.json
COPY ./package-lock.json ./package-lock.json

RUN npm install

# Start app
CMD ["node", "server.js"]

