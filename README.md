
## Description
This repository is intended to demonstrate a way of finding the shortest path from one airport to another ([complete task description](TASK.md)).  
The main business logic for finding the shortest path using Dijkstra's algorithm is implemented at [graph.model.ts](./src/modules/graph/models/graph.model.ts).
An implementation doc can be found at [Graph](https://mihara0320.github.io/airplane-router/classes/Graph.html)

### References

- App documentation: https://mihara0320.github.io/airplane-router/
- Datasource: https://openflights.org/data.html
- Documentation: https://mihara0320.github.io/airplane-router/
- Dijkstra's Algorithm: https://www.geeksforgeeks.org/dijkstras-algorithm-for-adjacency-list-representation-greedy-algo-8/

## Prerequisites

| Tool    | Version  |
|---------|----------|
| node.js | v16.16.0 |

### Official Installer
https://nodejs.org/download/release/v16.16.0/

### Using nvm 
```bash
$ nvm install 16.16.0
$ nvm use 16.16.0
```

### Using asdf
```bash
$ asdf install nodejs 16.16.0
$ asdf local nodejs 16.16.0
```

## Installation

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

### Swagger Documentation
```
http://localhost:3000/swagger
```

### Main API: Get the shortest path between airports
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

## Future Steps
* Improve format & lint rules
* Improve data validation & custom errors
* Improve test coverage
* Extend the app so that it covers the bonus task
* Containerize application
* Move data to database / cache
