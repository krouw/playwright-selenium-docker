FROM mcr.microsoft.com/playwright:focal

RUN groupadd --gid 1000 node \
  && useradd --uid 1000 --gid node --shell /bin/bash --create-home node

WORKDIR /usr/src/app
USER node

COPY package.json .

RUN npm install

COPY index.js .

CMD ["node", "index.js"]