import express from "express";
import {getProducts,getOneProduct,createProduct,replaceProduct,updateProduct,deleteProduct} from '../controller/product.js'

const productRouter=express.Router();


export const Router=productRouter
.get('/products',getProducts)
.get('/products/:id',getOneProduct)
.post('/products',createProduct)
.put('/products/:id',replaceProduct)
.patch('/products/:id',updateProduct)
.delete('/products/:id',deleteProduct)

