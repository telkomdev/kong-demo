const express = require('express');
const bodyParser = require('body-parser');
const basicAuth = require('basic-auth');
require('dotenv').config();

function auth(req, res, next) {
    var user = basicAuth(req);
    if (!user || !user.name || !user.pass) {
      res.set('WWW-Authenticate', 'Basic realm=Authorization Required');
      return res.sendStatus(401);
    }
    if (user.name === 'user1' && user.pass === 'pass123') {
      next();
    } else {
      res.set('WWW-Authenticate', 'Basic realm=Authorization Required');
      return res.sendStatus(401);
    }
}

const PORT = process.env.PORT;

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const products = {
    '001': {
        'id': '001',
        'name': 'Nokia 10',
        'quantity': 10
    },
    '002': {
        'id': '002',
        'name': 'IPHONE 10',
        'quantity': 5
    },
    '003': {
        'id': '003',
        'name': 'Samsung Galaxy 6',
        'quantity': 2
    }
};

app.get('/', (req, res, next) => {
	res.json({"hello": "helloooo"});
});

app.get('/api/products', auth, (req, res, next) => {
	res.json(products);
});

app.get('/api/products/:id', auth, (req, res, next) => {
	res.json(products[req.params.id]);
});

app.listen(PORT, () => {
	console.log(`app listen on port ${PORT}`);
});