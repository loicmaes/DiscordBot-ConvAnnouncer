FROM node:lts-alpine

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install -g yarn@latest && yarn install

COPY . .

CMD ["yarn", "start"]
