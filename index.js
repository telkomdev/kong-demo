const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();

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

const employees = {
    '001': {
        'id': '001',
        'name': 'John',
        'salary': 10000
    },
    '002': {
        'id': '002',
        'name': 'Dom',
        'salary': 50000
    },
    '003': {
        'id': '003',
        'name': 'Rom',
        'salary': 20000
    }
};

app.get('/', (req, res, next) => {
	res.json({"hello": "helloooo"});
});

app.get('/api/products', (req, res, next) => {
	res.json(products);
});

app.get('/api/products/:id', (req, res, next) => {
	res.json(products[req.params.id]);
});

app.get('/api/employees', (req, res, next) => {
	res.json(employees);
});

app.get('/api/employees/:id', (req, res, next) => {
	res.json(employees[req.params.id]);
});

app.listen(PORT, () => {
	console.log(`app listen on port ${PORT}`);
});