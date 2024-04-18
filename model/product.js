import mongoose from "mongoose";
const { Schema } = mongoose;


// creating schema for DB
const productSchema = new Schema({
    title: { type: String, required: true },
    description: { type: String, default: " Intuitive and flexible, Compass provides detailed schema visualizations" },
    price: { type: Number, required: true },
    discountPercentage: {type:Number,min:[0,'wrong min Discount'],max:[90,'wrong max discount']},
    rating: {type:Number,min:[0,'wrong min Discount'],max:[5,'wrong max discount']},
    brand: {type:String,required:true},
    category: {type:String,required:true},
    thumbnail: {type:String,required:true},
    images:[String]
});


// model for DB
export const Products = mongoose.model('products', productSchema)