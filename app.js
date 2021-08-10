const express = require("express");
const app = express();
app.use(express.static("public"))

const routerMain = require("./routes/main.js")

app.listen(3030, () => console.log("servidor corriendo"))

app.use("/", routerMain)