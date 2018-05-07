# Base image
FROM node:8.9.0

COPY ./build ./build
COPY ./config ./config
COPY ./src ./src

COPY ./package.json ./package.json
COPY ./package-lock.json ./package-lock.json

COPY ./.babelrc ./.babelrc
COPY ./.env ./.env

RUN npm i -f

# Start app
CMD ["npm", "start"]

