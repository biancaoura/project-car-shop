# Car Shop Project

## Summary

<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#additional-info">Additional Info</a></li>
  </ol>
</details>

## About The Project

Car Shop,

A car dealer API, with cars and motorcycles information

The services are integrated through `Docker` (backend and database)


> This is a project developed as part of my studies to help me learn about OOP, MongoDB and Mongoose

### Built With

[![TypeScript][TypeScript.io]][TypeScript-url]

[![NodeJS][NodeJS.io]][NodeJS-url]

[![Express][Express.io]][Express-url]

[![MongoDB][MongoDB.io]][MongoDB-url]

[![Mongoose][Mongoose.io]][Mongoose-url]

[![Jest][Jest.io]][Jest-url]

[![Mocha][Mocha.io]][Mocha-url]

[![Chai][Chai.io]][Chai-url]

[![Docker][Docker.io]][Docker-url]


## Getting Started
To run this project, the use of Docker is recommended
- If not using Docker, skip steps `3.` and `4.`

### Installation

1. Clone the repo
```
  git clone git@github.com:biancaoura/project-car-shop.git
```
2. Go to the repository
```
cd project-car-shop
```
3. Start the container
```
docker-compose up -d
```
4. Run a bash shell inside the container
```
docker-exec -it car_shop bash
```
5. Install the packages
```
npm install
```


## Usage


Start the project with
```
npm run dev
```

By default, the server is running at `localhost:3001`

- Make sure nothing is running on port `27017` and `3001`


### Car route

#### POST - Create a new car

- Route: `/cars`

- The body should follow the example below:

```json
{
  "model": "Marea",
  "year": 2002,
  "color": "Black",
  "status": true,
  "buyValue": 15.990,
  "doorsQty": 4,
  "seatsQty": 5
}
```

#### GET - List all cars

- Route: `/cars`

Response example:
```json
 [
    {
      "id": "634852326b35b59438fbea2f",
      "model": "Marea",
      "year": 2002,
      "color": "Black",
      "status": true,
      "buyValue": 15.99,
      "doorsQty": 4,
      "seatsQty": 5
    },
    {
      "id": "634852326b35b59438fbea31",
      "model": "Tempra",
      "year": 1995,
      "color": "Black",
      "buyValue": 39,
      "doorsQty": 2,
      "seatsQty": 5
    }
  ]
```

#### GET - Get a car by its id

- Route: `/cars/:id`

- Response example:
```json
{
  "model": "Marea",
  "year": 2002,
  "color": "Black",
  "status": true,
  "buyValue": 15.990,
  "doorsQty": 4,
  "seatsQty": 5
}
```

#### PUT - Update a car

- Route: `/cars/:id`

- The body should follow the example below:

```json
{
  "model": "Marea",
  "year": 2002,
  "color": "White",
  "status": true,
  "buyValue": 16.000,
  "doorsQty": 4,
  "seatsQty": 5
}
```
### Motorcycle route

#### POST - Create a new motorcycle

- Route: `/motorcycles`

- The body should follow the example below:

```json
{
  "model": "Honda Cb 600f Hornet",
  "year": 2005,
  "color": "Yellow",
  "status": true,
  "buyValue": 30.000,
  "category": "Street",
  "engineCapacity": 600
}
```

#### GET - Get all motorcycles

- Route: `/motorcycles`

- Return example:

```json
  [
    {
      "id": "634852326b35b59438fbea2f",
      "model": "Honda Cb 600f Hornet",
      "year": 2005,
      "color": "Yellow",
      "status": true,
      "buyValue": 30.000,
      "category": "Street",
      "engineCapacity": 600
    },
    {
      "id": "634852326b35b59438fbea31",
      "model": "Honda Cbr 1000rr",
      "year": 2011,
      "color": "Orange",
      "status": true,
      "buyValue": 59.900,
      "category": "Street",
      "engineCapacity": 1000
    }
  ]
```

#### GET - Get a motorcycle by its id

- Route: `/motorcycles/:id`

- Return example:

```json
  {
    "id": "634852326b35b59438fbea31",
    "model": "Honda Cbr 1000rr",
    "year": 2011,
    "color": "Orange",
    "status": true,
    "buyValue": 59.900,
    "category": "Street",
    "engineCapacity": 1000
  }
```

#### PUT - Update a motorcycle

- Route: `/motorcycles/:id`

- The body should follow the example below:

```json
{
  "model": "Honda Cb 600f Hornet",
  "year": 2014,
  "color": "Red",
  "status": true,
  "buyValue": 45.000,
  "category": "Street",
  "engineCapacity": 600
}
```

## Additional Info

- Tests cover 100% of the Service layer
- This is a project developed at Trybe

> `server` and  `Connection` files provided by Trybe

[TypeScript.io]: https://img.shields.io/badge/typescript-3178C6?style=flat-square&logo=typescript&logoColor=white
[TypeScript-url]: https://www.typescriptlang.org
[Express.io]: https://img.shields.io/badge/express-000000?style=flat-square&logo=express&logoColor=white
[Express-url]: https://expressjs.com
[MongoDB.io]: https://img.shields.io/badge/mongodb-47A248?style=flat-square&logo=mongodb&logoColor=white
[MongoDB-url]: https://www.mongodb.com
[Mongoose.io]: https://img.shields.io/badge/mongoose-8D6748?logo=mongoose&logoColor=white
[Mongoose-url]: https://mongoosejs.com
[NodeJS.io]: https://img.shields.io/badge/node.js-339933?style=flat-square&logo=node.js&logoColor=white
[NodeJS-url]: https://nodejs.org/en/
[Jest.io]: https://img.shields.io/badge/jest-C21325?style=flat-square&logo=jest&logoColor=white
[Jest-url]: https://jestjs.io
[Mocha.io]: https://img.shields.io/badge/mocha-8D6748?style=flat-square&logo=mocha&logoColor=white
[Mocha-url]: https://mochajs.org
[Chai.io]: https://img.shields.io/badge/chai-A30701?style=flat-square&logo=chai&logoColor=white
[Chai-url]: https://www.chaijs.com
[Docker.io]: https://img.shields.io/badge/docker-2496ED?style=flat-square&logo=docker&logoColor=white
[Docker-url]: https://www.docker.com
