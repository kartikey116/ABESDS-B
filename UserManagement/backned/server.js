import express from "express";
const app = express();

app.use(express.json());
const book = [
    {
        id: 1,
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        price: 10,
    },
    {
        id: 2,
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
        price: 15,
    },
    {
        id: 3,
        title: "1984",
        author: "George Orwell",        
        price: 20,
    }
]

app.get("/books", (req, res) => {
    res.send(book);
})

app.post("/books", (req, res) => {
    const book = req.body;
    book.id = book.id || book.length + 1;
    book.price = book.price || 0;
    res.send(book);
})

app.put("/books/:id", (req, res) => {
    const book = req.body;
    book.id = req.params.id;
    res.send(book);
})

app.delete("/books/:id", (req, res) => {
    const id = req.params.id;
    book.splice(id, 1);
    res.send(book);
})

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});