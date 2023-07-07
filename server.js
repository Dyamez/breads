const express = require('express');
const mongoose = require('mongoose');

require('dotenv').config();
const PORT = process.env.PORT;
const app = express();

// DEPENDENCIES
const methodOverride = require('method-override')


// MIDDLEWARE
app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
app.use(express.static('public'))
app.use(express.urlencoded({extended: true}))
app.use(methodOverride('_method'))

app.get('/', (req, res) => {
    res.send('Welcome to an Awesome App about Breads!')
});

//breads
const breadsController = require('./controllers/breads_controllers.js');
app.use('/breads', breadsController)

//bakers
const bakersController = require('./controllers/bakers_controller.js')
app.use('/bakers', bakersController)

// 404 Page
app.get('*', (req, res) => {
    res.send('404')
  })

/*
// MongoDB connection original code
mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true}, 
  () => { console.log('connected to mongo: ', process.env.MONGO_URI) }
)
*/

//code working with new version of mongooseDB version 7+
mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true})
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('Connected to MongoDB:', process.env.MONGO_URI)
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error)
  })

// listen port  
app.listen(PORT, () => {
    console.log('http://localhost:${PORT}')
})