const { Client } = require("pg");

const client = new Client({
  user: "postgres",
  host: "localhost",
  database: "northwind",
  password: "Ntl@104027",
  port: 5432,
});

client.connect();

export default client;
