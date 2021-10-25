const express = require('express');
const cors = require('cors');
const PORT = 3000;
const app = express();


app.use(cors());
app.use(express.json());


app.get('/user/:id', (req, res) => {
    const { id } = req.params;
    res.status(200).send({
        msg: `${id}`
    
    });
});

app.get('/article/:category/:title', (req, res) => {
    const { category, title } = req.params;
    res.status(200).send({
        msg: `${category}, ${title}`
    });
});

app.get('/comment/:commentText', (req, res) => {
    const { commentText } = req.params;
    res.status(200).send({
        commentText,
    });
});

app.post('/user', (req, res) => {
    const { name, age } = req.body;
    res.status(201).send({
        name, age
    });
});

app.post('/article', (req, res) => {
    const { category, title } = req.body;
    res.status(201).send({
        title, category
    });
});

app.post('/category', (req, res) => {
    const { name } = req.body;
    res.status(201).send({
        name
    });
});

app.put('/user', (req, res) => {
    const { name, age } = req.body;
    res.status(200).send({
        name, age
    });
});

app.patch('/user', (req, res) => {
    const { name, age } = req.body;
    res.status(200).send({
        name, age
    });
});

app.delete('/article', (req, res) => {
    const { id } = req.body;
    res.status(200).send({
        id
    });
});

app.listen(PORT, () => console.log(`Servros bezi na portosu ${PORT}`));
