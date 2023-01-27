FROM node:19.4-alpine3.17
WORKDIR /app
COPY /nodeApp/package.json ./
RUN npm install
COPY . .
CMD ["node", "nodeApp/server.js"]
EXPOSE 8080
