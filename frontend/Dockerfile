FROM node:18-alpine as base

WORKDIR /usr/src/app
ENV PATH /usr/src/app/node_modules/.bin:$PATH

# install and cache app dependencies
COPY package.json /usr/src/app/package.json

RUN npm install

COPY . .

EXPOSE 3000
CMD ["npm", "run", "dev"]