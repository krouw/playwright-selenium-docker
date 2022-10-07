FROM mcr.microsoft.com/playwright:focal

WORKDIR /root
RUN npm install playwright@1.12.3 && ./node_modules/.bin/playwright install

CMD ["./node_modules/.bin/playwright", "run-server", "8888"]