const express = require("express");
const app = express();
app.use(express.static("public"));

const PORT = 5000;


app.get("/", (req, res) => {
    res.sendFile("/index.html");
})


app.listen(PORT, () =>  console.log(`server is runnig at port: ${PORT}`));