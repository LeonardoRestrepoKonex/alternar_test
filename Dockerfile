FROM node:14-alpine as builder

LABEL author="Leonardo Restrepo"

WORKDIR /build
COPY . .
copy .env_qa .env
RUN npm i --force --legacy-peer-deps
RUN npm run build
EXPOSE 8894

CMD [ "node", "dist/main.js" ]
