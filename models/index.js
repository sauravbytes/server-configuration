const Sequelize = require("sequelize");

const sequelize = new Sequelize("training", "root", "", {
  host: "localhost",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    accurate: 10000,
    idle: 30000,
  },
});

sequelize
  .authenticate()
  .then(() => {
    console.log("connected to database successfully");
  })
  .catch((err) => {
    console.log(err);
  });

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.blogs = require("./blog")(sequelize, Sequelize);

module.exports = db;
