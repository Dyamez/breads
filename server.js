const express = require('express');

require('dotenv').config();
const PORT = process.env.PORT;
const app = express();

// MIDDLEWARE

app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())

app.get('/', (req, res) => {
    res.send('Welcome to an Awesome App about Breads!')
});

const breadsController = require('./controllers/breads_controllers.js');
app.use('/breads', breadsController);

app.listen(PORT, () => {
    //console.log('listening on port', PORT)
    console.log('http://localhost:${PORT}')
});

/*
const express = require('express');
const morgan = require('morgan');


const app = express();

require('dotenv').config();

const PORT = process.env.PORT;

app.use(morgan('tiny'));

// ROUTES 

app.get('/', function(req, res) {
    res.send('Welcome to an Awesome App about Bread!')
})



app.listen(PORT, function(){
    console.log(`http://localhost:${PORT}`)
})
*/