FROM mcr.microsoft.com/playwright:focal

WORKDIR /root

COPY package.json .

RUN npm install

COPY index.js .

CMD ["node", "index.js"]