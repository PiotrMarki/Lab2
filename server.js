const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const logoutRoutes = require("./routing/logout");
const productRoutes = require('/routing/product');
const logoutRoutes = require('/routing/logout');
const killRoutes = require('/routing/kill');
const homeRoutes = require('/routing/home');
const { STATUS_CODE } = require("./constants/statusCode");


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

app.use("/product", productRoutes);
app.use("/logout", logoutRoutes);
app.use("/kill", killRoutes);
app.use(homeRoutes);

app.use('views', (request, response) => {
  res.status(404).send('NOT_FOUND')
  response.sendFile(path.join(__dirname, "views", "404.html"));
  next();
});

app.listen(config.PORT, () => {
  console.log('Server works on port 3000');
})