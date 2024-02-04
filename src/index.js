const express = require('express');

const routes = require('./routes')
const configHandlebars = require('./config/configHandlebars');
const configExpress = require('./config/cofigExpress')

const app = express();
const port = 4000;

configHandlebars(app);
configExpress(app);


app.use(routes);


app.listen(port, () => console.log(`Server is listening on port ${port}.....`));