FROM ubuntu:latest
RUN apt-get update && apt-get install -y nginx
RUN apt-get install -y nodejs
RUN apt-get install -y npm
WORKDIR /app
COPY app/index.html /var/www/html
COPY /nodeApp/package.json ./
CMD ["nginx", "-g", "daemon off;"]
RUN npm install
COPY . .
EXPOSE 8080
CMD ["node", "nodeApp/server.js"]