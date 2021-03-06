# simple-nodejs-postgresql

This is a boilerplate to build a starting API with Node.js, Express and PostgreSQL on ES6. It is also configured with babel.

- [simple-nodejs-postgresql](#simple-nodejs-postgresql)
  - [Introduction](#introduction)
    - [Development mode](#development-mode)
  - [Quick Start](#quick-start)
  - [Documentation](#documentation)
    - [Folder Structure](#folder-structure)
      - [Folder database](#folder-database)
    - [Babel](#babel)
    - [Nodemon](#nodemon)
    - [Express](#express)
    - [PostgreSQL](#postgresql)
    - [Sequelize](#sequelize)
    - [SQL file] https://github.com/pthom/northwind_psql

## Introduction

This is a starting application for create an API with a [Node.js](https://nodejs.org/en/) and [Express](https://expressjs.com/), using [PostgreSQL](https://www.postgresql.org/) for database and [Sequelize](https://sequelize.org) as ORM.

### Development mode

The server side Express code will be served by a node server using [Nodemon](https://nodemon.io/) which helps in automatically restarting the server whenever server side code changes.

## Quick Start

```bash
# Clone the repository
git clone <repo_url>

# Go inside the directory
cd simple-nodejs-postgresql

# Install dependencies
yarn (or npm install)

# Start development server
yarn dev (or npm run dev)

```

## Documentation

### Folder Structure

the entrance of the application is `index.js`, on folder `database` All files created by Sequelize (migrations, seeds, models, config) and on folder `server` all files for API and for server (config, modules, controllers, middlewares).

#### Folder Database

In the database folder you already have two models and the migration files for creating two `Posts` and `Users` tables with a relationship. to create these tables, make with Sequelize:

`sequelize db:migrate`

You also seeds, make with Sequilize :

`sequelize db:seed:all`

### Babel

### Nodemon

### Express

### PostgreSQL

### Sequelize
