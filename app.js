const express = require('express')
const bodyparser = require('body-parser')
const ejs = require('ejs')

const app = express()
app.set('view engine','ejs');

app.use(bodyparser.urlencoded({extended:true}));
app.use(express.static('static'));
let items=[];
app.get('/',(req,res)=>{
let curdate={
   weekday:'long',
   day:'numeric',
   month:'long',
   year:'numeric'
}
let date = new Date().toLocaleDateString('hi-IN',curdate)
  res.render('list',{kindofday:date,newListItems:items})
})
app.post('/',(req,res)=>{
   let list = req.body.newItem;
   items.push(list)
res.redirect('/')
})

app.listen(5500,()=>{
   console.log('server starts on the port 5500')
})