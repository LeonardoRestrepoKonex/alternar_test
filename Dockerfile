FROM node:14-alpine

LABEL author="Leonardo Restrepo"

WORKDIR /app

ENV NODE_ENV QA

#Copy package.json in the image
COPY package.json ./

RUN npm i --force --legacy-peer-deps

#Copy the app
COPY . ./

RUN npm run build


EXPOSE 8894

CMD [ "node", "dist/main.js" ]
