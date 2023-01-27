## How to run this:

##### clone this repo

##### Now run a mongo container and expose the db port

```
docker run -d -p 27017:27017 --name mongo mongo
```

##### After the mongo container is up and running, get the mongo container IP

```
docker inspect <the_mongo_container_id> | grep "IPAddress"
```

##### After obtaining the mongo container ip, go to the db.js file in the config folder and edit the ip

```
const db = await mongoose.connect(`mongodb://<put_the_mongo_container_ip_here>/devops`, {});
```

##### Now it's time to build the Dockerfile, cd to the repo and execute

```
docker build -t node-app .
```

##### Now run a container from the new image

```
docker run -d -p 8080:8080  --name node-app node-app
```

## Note

##### Go to (localhost:8080) in your browser, you should be greeted with an "I AM THE MACHINE" text (random, I know)

##### You can create a mongodb document from (localhost:8080/student)

##### If you want to view the entire collection you can visit (localhost:8080/students)
