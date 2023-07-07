// require mongoose 
const mongoose = require('mongoose')
// creating shorthand for the Schema constructor 
const { Schema } = mongoose 

// schema
const breadSchema = new Schema({
    name: { type: String, required: true },
    hasGluten: Boolean,
    image: { type: String, default: 'https://ih0.redbubble.net/image.424804829.3332/ap,550x550,12x12,1,transparent,t.u4.png' },
    baker: {
        //type: String,
        //enum: ['Ronald', 'Grimace', 'Hamburglar', 'Birdie', 'Sundae', 'Fry Kids']
        type: Schema.Types.ObjectId,
        ref: 'Baker'
      }
})

// helper methods 
breadSchema.methods.getBakedBy = function(){
    return `${this.name} was baked with love by ${this.baker}`
  }  
/*
  //instance method
  breadSchema.method.getBakedBy = () => {
    return `${this.name} was baked with love by ${this.baker}`
  }

  //static method
  breadSchema.static.findBakersOtherBreads = () => {
    
  }
*/
// model and export 
const Bread = mongoose.model('Bread', breadSchema)
module.exports = Bread