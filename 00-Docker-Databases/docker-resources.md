# Docker Resources

### General Terminal Commands

1. List Open Ports 
   - `lsof -nP +c 15 | grep LISTEN`
   - The above command is useful not only that but also for troubleshooting docker related issues such as spinning up containers and ports already being in use.
   - (Security Skill) Command is also useful for in web security to frequently check the ports of your computer and app to see which port are open and close unneeded ports to avoid hole for hackers. 
2. 
   



## Basic Docker commands
1. Check if docker is installed.
```
$ docker
```   
2. Check the version of Docker
```
$ docker version
```
3. Show number of containers, etc
```
$ docker info
```

## Docker-Compose Commands
- Configure relationships between containers
- Save our docker container run settings in easy to read file
- 2 Parts: YAML File (docker.compose.yml) + CLI tool (docker-compose)
<!--  -->

1. Run the project
      - ```docker-compose up```
      - (Run in background)
      - ```docker-compose up -d```
2. Stop the Project (Every )
      - ```$ docker-compose down```

<!-- ---------- -->

## Container Commands
Basic Commands for working with containers
### Stopping Containers
1. List running containers (Even if not running) 
     - ```$ docker container ls -a```
     - (Running ONLY) 
     - ```$ docker container ls``` or ```$ docker  ps```
2. Get logs (Use name or ID)
     - ```$ docker container logs [NAME]```
3. List processes running in container
     - ```$ docker container top [NAME]```

### Stopping Containers
1. Stop all running containers
   - Useful for switch between projects.
   - ```$ docker stop $(docker ps -aq)```
2. Stop container by ID
   - ```$ docker container stop [ID]```

### Removing Containers
1. Stop individual container
   - ```$ docker container rm [ID]```
2. To remove a running container use force(-f)
   - ```$ docker container rm -f [ID]```
3. Remove all containers
   - ```$ docker rm $(docker ps -aq)```




References:
Parts of this MD used from [Brad Traversy Tutorials](https://www.youtube.com/c/TraversyMedia/search?query=docker).