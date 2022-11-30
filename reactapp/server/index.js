const express = require("express");
const loginRouter = require("./routes/loginRouter");
const app = express();

app.use(express.json({ urlencoded: true }));

app.use(loginRouter);

app.listen(8000, () => {
  console.log("listening to port 8000");
});
