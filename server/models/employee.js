const mongoose=require('mongoose');
var customerOrders=mongoose.model('customerOrders',{
IcecrreamName:{type:String},
IcecreamType:{type :String},
Qunatity :{type:Number},
TotalAmount:{type:Number}
});
module.exports= {customerOrders};