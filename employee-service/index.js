const express = require('express');
const bodyParser = require('body-parser');
const basicAuth = require('basic-auth');
require('dotenv').config();

function auth(req, res, next) {
    var user = basicAuth(req);
    console.log(user);
    if (!user || !user.name || !user.pass) {
      res.set('WWW-Authenticate', 'Basic realm=Authorization Required');
      return res.sendStatus(401);
    }
    if (user.name === 'user2' && user.pass === 'pass123') {
      return next();
    } else {
      res.set('WWW-Authenticate', 'Basic realm=Authorization Required');
      return res.sendStatus(401);
    }
}

const PORT = process.env.PORT;

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

let employees = {
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

app.get('/employees', auth, (req, res, next) => {
	res.json(employees);
});

app.post('/employees', auth, (req, res, next) => {
  const body = req.body;
  const id = body.id;
  const name = body.name;
  const salary = body.salary;

  if (id == '' || name == '' || salary == '') {
    return res.json({'message': 'data cannot be empty'});
  }

  employees[id] = {
    'id': id,
    'name': name,
    'salary': salary
  }

	res.status(201).json({'message': 'employee created', 'data': body});
});

app.get('/employees/:id', auth, (req, res, next) => {
	res.json(employees[req.params.id]);
});

app.listen(PORT, () => {
	console.log(`app listen on port ${PORT}`);
});