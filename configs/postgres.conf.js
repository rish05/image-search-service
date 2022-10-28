const pg = require('pg');
const Sequelize = require('sequelize');
const dbConfig = require('./config').props();

const sequelize = new Sequelize(dbConfig.postDb.DB, dbConfig.postDb.USER, dbConfig.postDb.PASSWORD, {
    host: dbConfig.postDb.HOST,
    dialect: dbConfig.postDb.DIALECT,
    dialectModule:pg,
    operatorsAliases: 0,
  
    pool: {
      max: dbConfig.postDb.pool.max,
      min: dbConfig.postDb.pool.min,
      acquire: dbConfig.postDb.pool.acquire,
      idle: dbConfig.postDb.pool.idle
    }
  });

  const db = {};

  db.Sequelize = Sequelize;
  db.sequelize = sequelize;
  db.image_tag_blob = require("../app/models/tag.image.blob.model.js")(sequelize, Sequelize);
  db.image_tag_bucket = require("../app/models/tag.image.bucket.model")(sequelize, Sequelize);
  module.exports = db;