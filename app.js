
const express = require('express');
const appRoutes = require('./routes/app');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


const port = process.env.PORT || 8080;

app.use(appRoutes)

app.listen(port, () => {
	console.log(`Server is running on PORT ${port}`);
}); 

module.exports = app;