FROM ubuntu:20.04
RUN apt-get update
RUN apt-get install -y curl
RUN curl -fsSL https://deb.nodesource.com/setup_18.x | bash -
RUN curl -fsSL https://www.mongodb.org/static/pgp/server-4.4.asc | apt-key add -
RUN echo "deb [ arch=amd64,arm64, trusted=yes ] https://repo.mongodb.org/apt/ubuntu focal/mongodb-org/6.0 multiverse" | tee /etc/apt/sources.list.d/mongodb-org-6.0.list
RUN mkdir -p /data/db
RUN mkdir -p /data/db/log
RUN apt update
RUN apt-get install -y mongodb
RUN apt-get install -y nodejs
WORKDIR /app
COPY app/index.html /var/www/html
COPY /nodeApp/package.json ./
CMD ["nginx", "-g", "daemon off;"]
RUN npm install
COPY . .
EXPOSE 8080
CMD ["node", "nodeApp/server.js"]