const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const logger = require('/utils/logger');
const productRoutes = require('/routing/product');
const logoutRoutes = require('/routing/logout');
const killRoutes = require('/routing/kill');
const homeRoutes = require('/routing/home');
const statusCode = require('/constants/statusCode.js');


const http = require("http");
const config = require("./config");
const { requestRouting } = require("./routing/routing");

const requestListener = (request, response) => {
  requestRouting(request, response);
};

const server = http.createServer(requestListener);

server.listen(config.PORT);

const app = express();
app.use('/', (req, res) => {
  res.send('404 - Not Found')
})

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

app.use((request, response, next) => {
  console.log('Middleware')
  next();
});

app.productRoutes('/product', (request, resppnse) => response.send('product'))
app.logoutRoutes('/logout', (request, resppnse) => response.send('logout'))
app.killRoutes('/kill', (request, resppnse) => response.send('kill'))
app.homeRoutes('/home', (request, resppnse) => response.send('home'))

app.use('views', (request, response) => {
  res.status(404).send('NOT_FOUND')
  response.sendFile('/views/404')
  next();
});

app.listen(PORT, () => {
  console.log('Server works on port 3000');
})