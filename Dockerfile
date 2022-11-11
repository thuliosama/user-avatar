FROM node:16.15.1-alpine

ENV HOME /usr/src/
WORKDIR $HOME

COPY package.json .
COPY tsconfig.json .
COPY yarn.lock .
COPY .env .
COPY babel.config.js .
COPY cert ./cert
COPY src ./src



RUN yarn
RUN yarn build

EXPOSE 3333

CMD yarn start

