## How to run this:

##### clone this repo

##### cd to the repo and build the image from the Dockerfile

```
docker build -t node-mongo .
```

##### After the build is finished, run the image as a container

```
docker run -d -p 8080:8080  --name node-mongo node-mongo
```

## Note

##### After you run the container, wait 30 seconds

##### MongoDB needs to configure itself before it starts listening on port 27017

##### So I made a 60 seconds timeout in the app so it won't crash

## How to use the node app

##### Go to (localhost:8080) in your browser, you should be greeted with an "I AM THE MACHINE" text (random, I know)

##### You can create a mongodb document from (localhost:8080/student)

##### If you want to view the entire collection you can visit (localhost:8080/students)
