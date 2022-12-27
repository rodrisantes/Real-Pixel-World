const express = require("express");
const router = express()
const {pixelModel} = require('../models/index')


router.get("/", async (req,res) =>{

console.log("aosdjnlasndklansd")
res.send("aksdjkasd")

// try {
//     const AllPixels = await pixelModel.find({})
//     console.log("Holasdasdads")
//  if(AllPixels.length === 0){
//         res.send("No existen pixels");}
//         else{
//             res.send(AllPixels)
//         }
        
// } catch (error) {
//     res.send(message = error)
    
// }
    
})

module.exports = router