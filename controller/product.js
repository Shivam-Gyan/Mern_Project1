import { Products } from '../model/product.js'

// Get operation 
const getProducts = async (req, res) => {

    // Finding the Products by there category
    // await Products.find({ category: req.body.category }).then(doc => {
    //     res.json(doc);
    // }).catch(err => {
    //     res.send(err);
    // })


    // Finding the all product
    await Products.find({}).then(doc => {
        res.json(doc);
    }).catch(err => {
        res.send(err);
    })
}


// Get product by particular query
const getOneProduct = async (req, res) => {
    // console.log(req.params)
    await Products.findById(req.params.id).then(doc => {
        res.json(doc);
    }).catch(err => {
        res.send(err);
    })
}


// Create operation 
const createProduct = (req, res) => {
    // creating the document in mongoDB 
    const products = new Products(req.body);
    products.save()
    .then(doc => {
        res.json(doc)
    }).catch(err => {
        res.send(err);
    })

}

// Replace the Document with New one
const replaceProduct = async (req, res) => {
    // Here returnDocument if after then it return the updated Docs if before then it return previous docs
    // findOneAndReplace(filter, replacement, options)

    await Products.findOneAndReplace({_id:req.params.id},req.body,{returnDocument:'after'})
    .then(doc=>{
        res.json(doc)
    })
    .catch(err=>{
        res.send(err)
    })


    // Using try-catch block 

    // try{
    //      const doc=await Products.findOneAndReplace({_id:req.params.id},req.body,{returnDocument:'after'})
    //      res.json(doc)
    // }catch(err){
    //     res.send(err)

    // }
}

const updateProduct = async (req, res) => {
    await Products.findOneAndUpdate({ _id: req.params.id }, req.body, { returnDocument: 'after' })
        .then(doc => {
            res.json(doc)
        })
        .catch(err => {
            res.send(err)
        })
}
const deleteProduct = async(req, res) => {
    await Products.findOneAndDelete({ _id: req.params.id },{ returnDocument: 'after' })
    .then(doc => {
        res.json(doc)
    })
    .catch(err => {
        res.send(err)
    })
}



export { getProducts, getOneProduct, createProduct, replaceProduct, updateProduct, deleteProduct }