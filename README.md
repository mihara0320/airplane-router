
## Description
This repository is intended to demonstrate a way of finding the shortest path from one airport to another ([complete task description](TASK.md)).  

### Documentation
Online documentation: https://mihara0320.github.io/airplane-router/

## Installation

### Prerequisite

| Tool    | Version  |
|---------|----------|
| node.js | v16.16.0 |


```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## API Usage

### Get the shortest path between airports
**Request Example**
```
http://localhost:3000/graph?src=TLL&dest=HND
```
**Response Example**
```json
{
  "totalDistanceInKm": 8151.866,
  "path": "TLL -> HEL -> NGO -> HND",
  "edges": [
    {
      "src": "TLL",
      "dest": "HEL",
      "distance": 100.886
    },
    {
      "src": "HEL",
      "dest": "NGO",
      "distance": 7769.583
    },
    {
      "src": "NGO",
      "dest": "HND",
      "distance": 281.397
    }
  ]
}
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

