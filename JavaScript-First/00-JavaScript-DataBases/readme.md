# Docker-Databases
This curriculum is designed to eliminate the problems with local development by using `docker-compose` instead of manually installing and configuring things like mySQL Pro, etc.

# Unit Learning Objective
Readers/Students should be to:
1. Explain why Docker exists and what problems it solves
3. Identify and describe the ports each contain
4. Compare and contrast Docker & Docker Compose
5. Use Docker, Terminal & MongoExpress to teach basic mongoDB concepts
6. Distinguish between the name of a docker image (mongo) and the container name (learn-mongo)
7. Use NPM Scripts to store docker commands
8. Explain and demonstrate C.R.U.D. methods

# Lessons
1. [lesson 1: Why Docker?]()
2. [lesson x: Why Mongo?](./mongo/lesson-1.md)

## Projects
1. Create a docker file for a simple HTTP node.js site (ToDo App)
2. Connect the docker image to mongo

# Unit Todo List
- [ ] Interview Questions
- [ ] Slides
- [ ] Dockerize Node Applications
- [ ] MongoDB **CRUD** Methods
     - [ ] Explain C.R.U.D.
     - [x] db, use db
     - [x] Insert
     - [x] Find()
     - [ ] update() $set
     - [ ] update() multi
     - [ ] update() $push
     - [ ] remove()
     - [ ] drop()
     - [ ] dropDatabase()
- [ ] MongoDB Advanced Methods
     - [ ] Relationships
- [ ] MongoDB Express
     - [x] Accessing the database
     - [x] Edit Documents
     - [ ] Securing MongoExpress ?
- [ ] Publish Tutorial(s)?
- [ ] Slides
- [ ] Resources


# What did you build
Today we'll be learning how to use Docker Compose to learn MongoDB.

## Unit Learning Objective
Students should be to:
1. Use Docker Compose to start and stop mongoDB environment
2. Use docker exec to access the mongoDB Shell 
3. Distinguish between the name of a docker image (mongo) and the container name (learn-mongo)
4. Use NPM Scripts to store docker commands such as docker exec for mongo shell

# About me
Hans McMurdy is an experianced web developer and coding teacher.

# The problem you wanted to solve
Installing development software on your local machine can be problematic when you go to deploy to a production server, it may not work as expected. Using Docker helps solve this problem without having the same overhead as you would have with a full blown Virtual Machine.

[Meme about it working on your machine.]()

## Tech stack
**Docker** - use OS-level virtualization to deliver software in packages called containers.
**MongoDb** - A no-sql database that uses JavaScript-like syntax.
**Mongo-Express** - Dashboard for mongo.

## What is Docker & Docker Compose?
  **Docker** is used to create a docker image.
  **Docker Compose** is used to configure relationships between containers.

## What is MongoDB?
MongoDB is no-sql database with JSON-like syntax.

# Process

## Identify the docker-compose.yml file
The docker-compose.yml file is used to define the containers that our project uses. In this case we have a basic mongo container and mongo-express which works as a dashboard to visually see the our database without needing to use shell commands.


## Starting and stopping the docker containers
  Docker-Compose Commands
  1. Check whats running before your start a project
        - ```docker && docker ps```
        - Take note on what ports (if any are in use)
        - if any are running, stop the them
        - ```docker stop $(docker ps -aq)```
  2. Run the project
        - ```docker-compose up```
        - (Run in background)
        - ```docker-compose up -d```
  3. Stop the Project (Every Time)
        - Best practice is to run this
        - ```docker-compose down```
        - If you dont pull down the container, then it stays running which not only can slow down your computer but more importantly block the ports you may want to use for other projects.
  4. If you run into a problem, READ the console before asking for help.

## Using mongo-express dashboard
If docker is running and we goto http://localhost:8081/ we should see the dashboard appear and look something like the following:

[![Mongo Express](mongo-express01.png)]()
Note that admin, config and local are always present when you start up a new mongo database.


## Using Docker Exec for Mongo Shell
  In order to access the mongo shell, we need to open up the terminal and run the following docker command.
  ```docker exec -it learn-mongo mongo```

  It should look like the following:

  [![mongo shell image](mongo-shell.png)]()


  **What is the command doing?**
  *Think-pair share* - find a classmate and look up the official docker api docks for `docker exec -it` and in your own words describe what this is doing.

  `learn-mongo` refers to the container name we gave for this specific mongo container. If we didn't provide a container name it would be a random name and that would be more problematic to access the specific container we wanted.

  `mongo` simply refers to the image.

## Using Mongo Shell to build a database
  Lets go ahead and create a new *collection* and use it. 

  Type the following into the terminal: `use learnMongo`. 

  We can then show the database we are using by using the `db` command.

  Next we are going to insert some data into our new database.
  To do this we'll use the the [insert](https://docs.mongodb.com/manual/tutorial/insert-documents/) command.


  ```js
  db.info.insert(
    {
      "country": "United States of America", 
      "state": "Arizona", 
      "cities": ["Phoenix", "Mesa", "Chandler"]
    }
  )
  ```
  This will insert a new *document* into the info *collection*.

  **Exercise**
  Next, you should come up with 2 other states, with atleast two cities in each.

  Finally, we will use the [.find()]() method to find the document with a state of Arizona.

  ```js
  db.info.find({state:'Arizona'}).pretty()
  ```
  Note that the [.pretty()]() command just formates the data more properly.


  By the end of the exercise your terminal should look something like following but with different examples:
  [![](exercise1.png)]()

  If we open mongo-express, we should see a new database appeared. We can also use the terminal command `show dbs` to display them in terminal.

  [![](mongo-express02.png)]()
  [![](mongo-express03.png)]()
  [![](mongo-express04.png)]()


## Using NPM Scripts
  # Package.json is used to demostrate NPM Scripts for use with docker
  Students should be able to:
  * Identify the package.json file and the script section
  * Modify the package.json file to add the docker command
  ```
  "mongo": "docker exec -it learn-mongo mongo",
  ```
  * Distinguish between the name of the docker image (mongo) and the container name (learn-mongo)

  * Demonstrate Mongo Terminal Commands
  1. Running with docker compose
      - ```docker exec -it learn-mongo mongo```

# Conclusion
## Key learnings
## Tips and advice
## Final thoughts and next steps