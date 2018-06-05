# proof-concept-graphql
Proof concept GraphQL node.js

## Table contents
* [Dependencies](#Dependencies)
* [Directory Layout](#directory-layout)
* [Start config](#start-config)
* [Scripts](#scripts)
  * [Run Development](#run-development)
  * [Run Production](#run-production)
  * [Run Test](#run-test)
  * [Run create New Module](#run-create-new-module)
  * [Run Linter](#run-linter)
* [GraphiQL](#graphiql)

## Dependencies
- Node.js 9.4.0 or higher
- apollo-server-express
- express
- graphql
- graphql-tools
- request-promise

## Directory Layout

Before you start, take a moment to see how the project structure looks like:

```
.
├── /node_modules/                  # 3rd-party libraries and utilities
├── /src/                           # Source Node.js-GraphpQL API
│   ├── /config/                    # Configuration by enviroment and endpoints
│   │   ├── /env/                   # Configuration by enviroment
│   │   ├── endpoints.js            # Endpoints services
│   │   └── index.js                # Merged configuration by enviroment and endpoints
│   ├── /core/                      # Configuration Server graphQL
│   ├── /modules/                   # Source modules
│   │   ├── /module1/               # Module 1 Sources files
│   │   │   ├── Connector.js        # Request or connection for get or send data(Servide or DadaBase)
│   │   │   ├── Model.js            # Data Model and transformers necesaries
│   │   │   ├── Resolver.js         # Endpoints GraphQL(Query, Mutations, etc)
│   │   │   └── typeDefs.graphql    # Types definitions GraphQL
│   │   │
│   │   ├── /module2/               # Module 2 Sources files
│   │   │   ├── Connector.js        # Request or connection for get or send data(Servide or DadaBase)
│   │   │   ├── Model.js            # Data Model and transformers necesaries
│   │   │   ├── Resolver.js         # Endpoints GraphQL(Query, Mutations, etc)
│   │   │   └── typeDefs.graphql    # Types definitions GraphQL
│   │   │
│   │   └── ...
│   │
│   └── api.js                      # Require middlewares for start server
│
├── index.js                        # Main File
└── package.json                    # The list of 3rd party libraries and utilities
```

### Install dependencies
```
$ npm install
```

## Start config
First configure .env with data and keys needed to start the project

## Scripts
### Run development
```
$ npm run start:dev
```
### Run production
```
$ npm start
```
### Run test
```
$ npm run test
```
### Run Linter
```
$ npm run lint
```
### Run create New Module
For create new module with template stack files run this command
```
$ npm run new:module
```

## GraphiQL
[http://localhost:3000/graphiql]()
