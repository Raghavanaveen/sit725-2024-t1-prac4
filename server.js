const express = require("express");
const { MongoClient, ServerApiVersion } = require('mongodb');
const app = express();
const uri = "mongodb+srv://vvrnaveen123:raghava@cluster0.lwyibgq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const port = process.env.PORT || 3000;
let collection;

app.use(express.static(__dirname)); 
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

