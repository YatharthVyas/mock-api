const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const printRequest = (req, res) => {
    console.log("Request");
    console.log(req.body);
    res.json({ ...req.body });
};

app.get("/", (req, res) => {
    console.log("GET request");
    printRequest(req, res);
});
app.put("/", (req, res) => {
    console.log("PUT request");
    printRequest(req, res);
});
app.post("/", (req, res) => {
    console.log("POST request");
    printRequest(req, res);
});
app.delete("/", (req, res) => {
    console.log("DELETE request");
    printRequest(req, res);
});
app.patch("/", (req, res) => {
    console.log("PATCH request");
    printRequest(req, res);
});
app.listen(port, () =>
    console.log(`Hello world, app is listening on port ${port}!`)
);
