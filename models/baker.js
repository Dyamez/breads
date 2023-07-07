//dependecies
const mongoose = require('mongoose')
const { Schema } = mongoose

//schema
const bakerSchema = new Schema ({
    name: {
        type: String,
        required: true,
        enum: ['Ronald', 'Grimace', 'Hamburglar', 'Birdie', 'Sundae', 'Fry Kids']
    }, 
    bio: String
})

// model and export
const  Baker = mongoose.model('Baker', bakerSchema)
module.exports = Baker