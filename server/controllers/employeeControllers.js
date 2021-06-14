const express=require('express');
var router=express.Router();
var { customerOrders }=require('../models/employee');
// router.get('/employees',(req,res) =>{
// customerOrders.find((err,docs) =>{
// if(!err){
// res.send(docs);
// }
// else{
// console.log("Error in retriving employees:"+JSON.stringify(err,undefined,2));
// }
// });
// });
router.get('/:id',(req,res)=>{

	if(!objectId.isValid(req.params.id))
		return res.status(400).send('No record with given id:$(req.params.id)');
	customerOrders.findById(req.params.id,(err,doc)=>{
      if(!err){
      	res.send(doc);
      }
      else{

      	console.log('Error in retriving Employee:'+JSON.stringify(err,undefined,2));
      }
    	})
})
// router.post('/',(req,res)=>{
 
//      var emp=new Employee({
//          customerid:req.body.customerid,
//          icecreamtype :req.body.icecreamtype,
//          quantity :req.body.quantity,
//          amount :req.body.amount,
// });
// emp.save((err,doc)=>{
// io.emit('orders',req.body);
//  if(!err){

// res.send(doc);
// }
// else{
// console.log('Error in Employee save:'+JSON.stringify(err,undefined,2));
// }
// });
// });
router.put('/:id',(req,res)=>{
	if(!objectId.isValid(req.params.id))
		return res.status(400).send('No record with given id:${req.params.id}');
	 var emp ={
         customerid:req.body.id,
         icecream :req.body.icecream,
         quantity :req.body.quantity,
         amount :req.body.amount,
     };
     customerOrders.findByIdAndUpdate(req.params.id,{$set:emp},{new:true},(err,doc)=>{
    if(!err){
    	res.send(doc);
    }
    else{
    	console.log('Error in Employee Update:'+JSON.stringify(err,undefined,2));
    }

     });
});
router.delete('/:id',(req,res)=>{
if(!objectId.isValid(req.params.id))
		return res.status(400).send('No record with given id:${req.params.id}');
	customerOrders.findByIdAndRemove(req.params.id,(err,doc)=>{
		if(!err){
			res.send(doc);
		}
        else{
        	console.log('Error in Employee delete:'+JSON.stringify(err,undefined,2));
        }
	})
});
module.exports=router;