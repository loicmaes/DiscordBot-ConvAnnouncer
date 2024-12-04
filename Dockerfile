FROM node:lts-alpine

WORKDIR /usr/src/app

COPY package*.json ./

RUN yarn install

RUN yarn build

COPY . .

CMD ["yarn", "start"]
