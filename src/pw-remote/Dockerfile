FROM mcr.microsoft.com/playwright:focal

WORKDIR /root

COPY package.json .

RUN npm install

COPY index.js .

CMD ["./node_modules/.bin/playwright", "run-server", "--port", "8888"]