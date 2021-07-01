# Cllctve-comments
An api where users can comment on projects

## Built With

* [NodeJS](https://nodejs.org/) - Runtime Environment
* [ExpressJs](https://expressjs.com/) - Web Application Framework
* [Mongodb Atlas](https://cloud.mongodb.com/) - Cloud database

## Installation/Getting Started
* Git clone repository
``` 
git clone <repo_url>
```

## Install all dependencies
```
npm install
```
## Running
```
npm start
```

### Testing with [Postman](www.postman.com)
```
* Install and setup Postman 
* Navigate to localhost 3000 
```

## Features
* Users can create their own user account.
* Users can create a new project.
* Users can get all projects.
* Users can get a single project.
* Users can post a comment on a project

## Endpoints
|  Method  |  Endpoint  |  Task  |
|  --- |  --- |  ---  |
|  `POST`  |  `/api/users/new`  |  `User signup`  |
|  `POST`  |  `/api/projects/new`  |  `User can create new project`  |
|  `GET`  |  `/api/projects`  |  `User can get all projects posted` |
|  `GET`  |  `/api/projects/:id`  |  `User can get a single project and all comments`  |
|  `POST`  |  `/api/projects/:id`  |  `User can post a comment to a project`  |

## Hosted on
* [Heroku](https://cllctve-comments.herokuapp.com)

## API documentation on
* [Postman](https://documenter.getpostman.com/view/8823206/Tzkzpyru)