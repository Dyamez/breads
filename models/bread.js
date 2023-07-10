// require mongoose 
const mongoose = require('mongoose')
// creating shorthand for the Schema constructor 
const { Schema } = mongoose 

const breadSchema = new Schema({
  name: { type: String, required: true },
  hasGluten: Boolean,
  image: { type: String, default: 'https://ih0.redbubble.net/image.424804829.3332/ap,550x550,12x12,1,transparent,t.u4.png'},
  baker: {type: Schema.Types.ObjectID, ref: 'Baker'}
  }, {
    toJSON: {
      virtuals: true
    }
  })

// helper methods 
breadSchema.methods.getBakedBy = function(){
  return `${this.name} was baked with love by ${this.baker.name}, who has been with us since ${this.baker.startDate.getFullYear() }`
  }

//static method

breadSchema.statics.findBakersOtherBreads = function(bakersName){
  return this.find({baker: bakersName})
}

// model and export 
const Bread = mongoose.model('Bread', breadSchema)
module.exports = Bread
