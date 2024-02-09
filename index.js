const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

const categories = require('./data/categories.json')
const news = require('./data/News.json');

app.use(cors());

app.get('/', (req, res) => {
    res.send('Dragon is Flying');
});

app.get('/categories', (req, res) => {
    res.send(categories);
})

app.get('/news', (req, res) => {
    res.send(news);
});
//By Item specific id
app.get('/news/:id', (req, res) => {
    const id = req.params.id;
    const selectedNews = news.find(item => item._id === id);
    res.send(selectedNews);
})
//Category specific news
app.get('/categories/:id', (req, res) => {
    const id = parseInt(req.params.id);
    if (id === 0) {
        res.send(news);
    }
    else {
        const selectedCategory = news.filter(item => parseInt(item.category_id) === id);
        res.send(selectedCategory);
    }

})


// Listen Purpose 
app.listen(port, () => console.log(`Listening on port ${port}`));