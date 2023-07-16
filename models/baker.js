//dependecies
const mongoose = require('mongoose')
const { Schema } = mongoose
const Bread = require('./bread')

//schema
const bakerSchema = new Schema ({
    name: {
        type: String,
        required: true,
        enum: ['Ronald', 'Grimace', 'Hamburglar', 'Birdie', 'Sundae', 'Fry Kids'],
    }, 
    startDate: { type: Date, required: true },
    bio: String
}, { toJSON: { virtuals: true }})

//virtuals
bakerSchema.virtual('breads', {
    ref: 'Bread',
    localField: '_id',
    foreignField: 'baker'
})

// hooks 
bakerSchema.post('findOneAndDelete', function() {
    //console.log(this)
    Bread.deleteMany({ baker: this._conditions._id })
        .then(deleteStatus => {
            console.log(deleteStatus)
        })
  })      

// model and export
const Baker = mongoose.model('Baker', bakerSchema)
module.exports = Baker