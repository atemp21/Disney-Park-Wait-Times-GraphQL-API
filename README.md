# Disney Parks Wait Times GraphQL 

A simple GraphQL API to get attractions wait times at Disney theme parks around the world!

Get a list of the Disney theme parks. 
Get the wait times for all attractions (rides, restaruants,etc.,) at a specific park.

### API 

 http://localhost:4000/graphql

### GraphQL Schema
```
type Query {
  parks: [Park]
  attractions(park: String): [Attraction]
}

type Park {
  name: String!
}

type Attraction {
  id: String!
  name: String!
  waitTime: Int
  status: String
  active: Boolean
  lastUpdate: String
  fastPass: Boolean
}
```

### Sample Attraction
```
 { 
    "id": "WaltDisneyWorldMagicKingdom_80010153",
    "name": "Jungle Cruise",
    "waitTime": 10,
    "status": "Closed",
    "active": false,
    "lastUpdate": "2022-05-19T02:00:51.415Z",
    "fastPass": false
}
 ```