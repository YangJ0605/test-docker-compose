FROM reg.deeproute.ai/deeproute-public/docker-node:14-v0.1
WORKDIR /srv

ADD . ./


RUN yarn \
  && ls

EXPOSE 4000

RUN ls

CMD node index.js
