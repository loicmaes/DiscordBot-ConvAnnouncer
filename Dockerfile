FROM node:lts-alpine

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install -g yarn@latest

RUN yarn install

COPY . .

CMD ["yarn", "start"]
