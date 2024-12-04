FROM node:lts-alpine

WORKDIR /usr/src/app

COPY package*.json ./

RUN yarn install

RUN yarn start:brut

COPY . .

CMD ["yarn", "start"]
