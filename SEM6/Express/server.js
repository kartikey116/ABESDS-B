import express from "express";

const app = express();

const port = 3000;

app.get("/", (req, res) => {
    res.send("Hello World");
});

app.post("/user", (req, res) => {
    const user = req.body;
    console.log(user);
    res.send("User added");
});

app.delete("/user", (req, res) => {
    const user = req.body;
    console.log(user);
    res.send("User deleted");
});

app.put("/user", (req, res) => {
    const user = req.body;
    console.log(user);
    res.send("User updated");
});

app.all("*", (req, res) => {
    const user = req.body;
    console.log(user);
    res.send("User updated");
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});