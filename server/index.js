const express=require('express');
const bodyParser=require('body-Parser');
const cors=require('cors');
var { mongoose }=require('./db.js');
var  {customerOrders} =require('./models/employee');
var employeeController=require('./controllers/employeeControllers.js')
//var { customerOrders }=require('../models/employee');
var app=express();

//socket code
var server = require('http').createServer(app);
var io = require('socket.io')(server);

 io.on("connection", (socket) => {
    console.log("Socket is connected...")
})
//end of socket code
app.use(bodyParser.json());
app.use(cors({ origin :'http://localhost:4200'}));
server.listen(3000,() =>console.log("server started at port:3000"));
app.use('/orders',employeeController);

app.post('/onReceivedOrdes',(req,res)=>{
	
var orders=new customerOrders();
var totalCustomerOrders=req.body;
orders.collection.insert(totalCustomerOrders, function (err, doc) {
	  if (err){ 
		  return console.error(err);
	  } else {
        // res.send(doc);
         io.emit('orders',totalCustomerOrders);
	  }
	});

//      var orders=new Employee.Employee({
//          IcecrreamName:req.body.IcecrreamName,
//          IcecreamType :req.body.IcecreamType,
//          Qunatity :req.body.Qunatity,
//          TotalAmount :req.body.TotalAmount,
// });

// orders.save((err,doc)=>{

//  if(!err){
// console.log(doc)
// io.emit('orders',emp);
// //res.send(doc);
// }
// else{
// console.log('Error in Employee save:'+JSON.stringify(err,undefined,2));
// }
// });
});

app.get('/',(req,res) =>{
customerOrders.find((err,docs) =>{
if(!err){
res.send(docs);
}
else{
console.log("Error in retriving employees:"+JSON.stringify(err,undefined,2));
}
});
});