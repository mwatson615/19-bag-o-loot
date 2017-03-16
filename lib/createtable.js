
const { db } = require('./createdb.js');

module.exports.createTable = db.run("CREATE TABLE IF NOT EXISTS toybag (id INT PRIMARY KEY, child_name TEXT NOT NULL, delivered INT(0, 1), toylist TEXT NOT NULL)");
