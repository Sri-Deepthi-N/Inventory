var express=require("express");
var app=express()
var cors =require("cors")
app.use(cors())
app.use(express.json())
const mongoose=require('mongoose')

mongoose.connect("mongodb+srv://sathya:UCPKD1CiN9n5AgRX@cluster0.4jwttmw.mongodb.net/Inventory")
.then (console.log("connected to mongo"))


//suppliers
const supplierSchema= new mongoose.Schema({
    firstname:{type:String,required:true},
    lastname:{type:String,required:true},
    mobilenumber:{type:Number,required:true},
    address:{type:String,required:true},
})

let Suppliers =mongoose.model("Supplier",supplierSchema)

app.get("/supplier",async(req,res)=>{
    const suppliers=await Suppliers.find()
    res.json(suppliers)
})

app.post('/supplier', (req, res) => {
    const {firstname,lastname,mobilenumber,address}=req.body
    const newitem=Suppliers({firstname,lastname,mobilenumber,address})
    newitem.save();
    res.status(200).json(newitem)
 })


 //Customer
const customerSchema= new mongoose.Schema({
  firstname:{type:String,required:true},
  lastname:{type:String,required:true},
  mobilenumber:{type:Number,required:true},
  address:{type:String,required:true},
})

let Customer=mongoose.model("Customer",customerSchema)

app.get("/customer",async(req,res)=>{
  const customers=await Customer.find()
  res.json(customers)
})

app.post('/customer', (req, res) => {
  const {firstname,lastname,mobilenumber,address}=req.body
  const newitem=Customer({firstname,lastname,mobilenumber,address})
  newitem.save();
  res.status(200).json(newitem)
})


//purchase order
const purchaseSchema= new mongoose.Schema({
    supplier:{type:String,required:true},
    billingaddress:{type:String,required:true},
    shippingaddress:{type:String,required:true},
    shippingmethod:{type:String,required:true},
    preferredshippingdate:{type:String,required:true},
})

let Purchases =mongoose.model("purchaseorder",purchaseSchema)

app.get("/purchaseorder",async(req,res)=>{
    const purchases=await Purchases.find()
    res.json(purchases)
})

app.post('/purchaseorder',async(req,res)=>{
    const {supplier,billingaddress,shippingaddress,shippingmethod,preferredshippingdate}=req.body
    const newitem=await Purchases({supplier,billingaddress,shippingaddress,shippingmethod,preferredshippingdate})
    newitem.save();
    res.status(200).json(newitem)
 })


//salesorder
const salesSchema= new mongoose.Schema({
  warehouse:{type:String,required:true},
  salesorder:{type:String,required:true},
  responsivesalesperson:{type:String,required:true},
  customer:{type:String,required:true},
  contactperson:{type:String,required:true},
  billingaddress:{type:String,required:true},
  shippingaddress:{type:String,required:true},
  shippingmethod:{type:String,required:true},
  preferredshippingdate:{type:String,required:true},
  paymentterms:{type:String,required:true},
})

let Sales =mongoose.model("salesorder",salesSchema)

app.get("/salesorder",async(req,res)=>{
  const sales=await Sales.find()
  res.json(sales)
})

app.post('/salesorder',async(req,res)=>{
  const {warehouse,salesorder,responsivesalesperson,customer, contactperson,billingaddress,shippingaddress,shippingmethod,preferredshippingdate,paymentterms}=req.body
  const newitem=await Sales({warehouse,salesorder,responsivesalesperson,customer, contactperson,billingaddress,shippingaddress,shippingmethod,preferredshippingdate,paymentterms})
  newitem.save();
  res.status(200).json(newitem)
})

//product
const productSchema= new mongoose.Schema({
  photo:{type:String,required:true},
  name:{type:String,required:true},
  productid:{type:String,required:true},
  price:{type:String,required:true},
  quantity:{type:String,required:true},
  
})

let Products =mongoose.model("product",productSchema)

app.get("/product",async(req,res)=>{
  const products=await Products.find()
  res.json(products)
})

app.post('/product',async(req,res)=>{
  const {photo,name,productid,price,quantity}=req.body
  const newitem=await Products({photo,name,productid,price,quantity})
  newitem.save();
  res.status(200).json(newitem)
})

app.listen(3000,()=>{
  console.log("server started...")
})
//Warehouse
const WarehouseSchema=new mongoose.Schema({
  address:{type:String,required:true},
})

let Warehouse =mongoose.model("Warehouse",WarehouseSchema);

app.get("/address",async(req,res) =>{
  const warehouse=await Warehouse.find();
  res.json(warehouse)
})