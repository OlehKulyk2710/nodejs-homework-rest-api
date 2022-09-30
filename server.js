const app = require("./app");
const mongoose = require("mongoose");
require("dotenv").config();

mongoose
  .connect(process.env.DB_HOST)
  .then(() => console.log("Database connection successful"))
  .catch((error) => console.log(error.message));

app.listen(3000, () => {
  console.log("Server running. Use our API on port: 3000");
});
