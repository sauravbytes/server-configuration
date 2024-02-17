const express = require("express");
const app = express();
const cors = require("cors");

app.use(
  cors({
    origin: "*",
  })
);
const db = require("./models/index.js");
db.sequelize.sync({ force: true });

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

let PORT = 4000;

const createBlog = async (req, res) => {
  let data = {
    name: req.body.name,
    desc: req.body.desc,
    avatar: req.body.avatar,
  };
  let createdBlog = await db.blogs.create(data);
  if (createdBlog) {
    res.status(200).json({
      data: createdBlog,
      message: "Created Successfully",
    }); 
  }

  console.log(createdBlog);
};

app.post("/add", createBlog);

// listening to the port 4000
app.listen(PORT, () => {
  console.log("server is running in port 4000");
});
