FROM node:14.16.0

RUN mkdir -p /opt/app

ARG DISCORD_URL
ENV DISCORD_URL "$DISCORD_URL"

ARG BOT_NAME
ENV BOT_NAME "$BOT_NAME"

ARG BOT_IMAGE_URL
ENV BOT_IMAGE_URL "$BOT_IMAGE_URL"

EXPOSE 3000

WORKDIR /opt/app

COPY package.json /opt/app
COPY yarn.lock /opt/app

RUN yarn

COPY . /opt/app

RUN yarn build

RUN yarn next telemetry disable

CMD [ "npm", "start" ]