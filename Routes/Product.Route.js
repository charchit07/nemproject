const { Router } = require("express");
const { ProductModel } = require("../Model/Product.Model");
const productRoute = Router();

productRoute.get("/:id",async (req, res) => {
  const ID = req.params.id;
  try {
    let data = await ProductModel.find({ _id: ID });
    res.send(data);
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
});

productRoute.get("/", async (req, res) => {
//   const min = req.query.min;
//    const max = req.query.max;
  const category =req.query.category
  const brand=req.query.brand
//   const price=req.query.price
  const gender=req.query.gender
  const price=req.query.pHL || req.query.pLH
  const rating = req.query.rating
// const arr=[price,rating]
// for(let i=0;i<arr.length;i++){
 if(price){
   if(category && gender && brand){
    try {
        let productData =await ProductModel.find({$and:[{category: { $regex: `${category}`, $options: "i" }},{gender:gender},{brand: { $regex: `${brand}`, $options: "i" },}]}).sort({price:price})
        res.send(productData)
    } catch (err) {
        console.log(err)
        res.status(500).send({message:err.message})
    }
  }
    else if(category && gender){
    try {
        let productData =await ProductModel.find({$and:[{category: { $regex: `${category}`, $options: "i" }},{gender:gender}]}).sort({price:price})
        res.send(productData)
    } catch (err) {
        console.log(err)
        res.status(500).send({message:err.message})
    }
  }
    else if(brand && gender){
    try {
        let productData =await ProductModel.find({$and:[{brand: { $regex: `${brand}`, $options: "i" }},{gender:gender}]}).sort({price:price})
        res.send(productData)
    } catch (err) {
        console.log(err)
        res.status(500).send({message:err.message})
    }
  }
      else if(category && brand){
    try {
        let productData =await ProductModel.find({$and:[{category: { $regex: `${category}`, $options: "i" }},{brand:brand}]}).sort({price:price})
        res.send(productData)
    } catch (err) {
        console.log(err)
        res.status(500).send({message:err.message})
    }
  }
  else if (category) {
    try {
      const productData = await ProductModel.find({
        category: { $regex: `${category}`, $options: "i" },
      }).sort({price:price})
      res.send(productData);
    } catch (err) {
      res.status(500).send({ message: err.message });
    }
  } else if (gender) {
    try {
      const productData = await ProductModel.find({gender:gender}).sort({price:price})
      res.send(productData);
    } catch (err) {
      res.status(500).send({ message: err.message });
    }
  }

  else if(brand){
    try {
      const productData = await ProductModel.find({
        brand: { $regex: `${brand}`, $options: "i" }.sort({price:price})
      });
      res.send(productData);
    } catch (error) {
      res.status(500).send({ message: err.message });
    }}
    else {
    const product = await ProductModel.find().sort({price:price})
    res.send(product);
}
  
}
 else{
  if(category && gender && brand){
    try {
        let productData =await ProductModel.find({$and:[{category: { $regex: `${category}`, $options: "i" }},{gender:gender},{brand: { $regex: `${brand}`, $options: "i" },}]}).sort({rating:rating})
        res.send(productData)
    } catch (err) {
        console.log(err)
        res.status(500).send({message:err.message})
    }
  }
    else if(category && gender){
    try {
        let productData =await ProductModel.find({$and:[{category: { $regex: `${category}`, $options: "i" }},{gender:gender}]}).sort({rating:rating})
        res.send(productData)
    } catch (err) {
        console.log(err)
        res.status(500).send({message:err.message})
    }
  }
    else if(brand && gender){
    try {
        let productData =await ProductModel.find({$and:[{brand: { $regex: `${brand}`, $options: "i" }},{gender:gender}]}).sort({rating:rating})
        res.send(productData)
    } catch (err) {
        console.log(err)
        res.status(500).send({message:err.message})
    }
  }
      else if(category && brand){
    try {
        let productData =await ProductModel.find({$and:[{category: { $regex: `${category}`, $options: "i" }},{brand:brand}]}).sort({rating:rating})
        res.send(productData)
    } catch (err) {
        console.log(err)
        res.status(500).send({message:err.message})
    }
  }
  else if (category) {
    try {
      const productData = await ProductModel.find({
        category: { $regex: `${category}`, $options: "i" },
      }).sort({rating:rating})
      res.send(productData);
    } catch (err) {
      res.status(500).send({ message: err.message });
    }
  } else if (gender) {
    try {
      const productData = await ProductModel.find({gender:gender}).sort({rating:rating})
      res.send(productData);
    } catch (err) {
      res.status(500).send({ message: err.message });
    }
  }

  else if(brand){
    try {
      const productData = await ProductModel.find({
        brand: { $regex: `${brand}`, $options: "i" }.sort({rating:rating})
      });
      res.send(productData);
    } catch (error) {
      res.status(500).send({ message: err.message });
    }}
    else {
    const product = await ProductModel.find().sort({rating:rating})
    res.send(product);
}
  
}
  
});

//    else if(max && min && brand){
//     try {
//         let productData =await ProductModel.find({$and:[{price:{$gt:min}},{price:{$lt:max}},{brand: { $regex: `${brand}`, $options: "i" },}]}).sort({price:price})
//         res.send(productData)
//     } catch (err) {
//         console.log(err)
//         res.status(500).send({message:err.message})
//     }
//   } 
//   } else if(high){
//     try {
      
//         let productData =await ProductModel.find().sort({price:high})
//         res.send(productData) 
        
//     } catch (err) {
//         console.log(err)
//         res.status(500).send({message:err.message})
//     }
// } else if(low){
//   try {
    
//       let productData =await ProductModel.find().sort({price:low})
//       res.send(productData) 
     
//   } catch (err) {
//       console.log(err)
//       res.status(500).send({message:err.message})
//   }
// }
//    else if(price){
//     try {
//       const productData = await ProductModel.find({price:{$lt:price}});
//       res.send(productData);
//     } catch (err) {
//       res.status(500).send({ message: err.message });
//     }
//   } else if(max && min){
//     try {
//         let productData =await ProductModel.find({$and:[{price:{$gt:min}},{price:{$lt:max}}]})
//         res.send(productData)
//     } catch (err) {
//         console.log(err)
//         res.status(500).send({message:err.message})
//     }
// } 


productRoute.post("/create", async (req, res) => {
  try {
    await ProductModel.insertMany(req.body);
    res.status(201).send({ msg: "Product has been added" });
  } catch (err) {
    res.status(400).send({ message: err.message });
  }
});

productRoute.patch("/update/:id", async (req, res) => {
  const ID = req.params.id;
  const payload = req.body;
  try {
    await ProductModel.findByIdAndUpdate({ _id: ID }, payload);
    res.send({msg:`Product with id:${ID} has been updated`})
  } catch (err) {
    res.status(400).send({ message: err.message });
  }
});

productRoute.delete("/delete/:id", async (req, res) => {
  const ID = req.params.id;
  try {
    await ProductModel.findByIdAndDelete({ _id: ID });
    res.send({msg:`Product with id:${ID} has been deleted`})
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
});

module.exports = { productRoute };
