const express = require("express");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const router = express.Router();

const { Country, Activity } = require("../db.js");
;

router.use(express.json());

router.post("/",async(req,res)=>{
try {
    const {name,difficulty,duration,season,countries}=req.body
    const newActivity=await Activity.create({
        name:name,
        difficulty:difficulty,
        duration:duration,
        season:season
    });
    countries.map(async(countryId)=>{
        const foundCountry= await Country.findAll({
            where:{idName:countryId},
        })
        if (foundCountry)newActivity.addCountries(foundCountry)
    })
res.status(201).json({msg:"Activity created correctly"})
} catch (error) {
console.log(error)
res.status(400).json({
    error:"create_activity_error",
    description:"error creating the activity"
})    
}
})
router.get("/",async(req,res)=>{
    try {
        const activities=await Activity.findAll({
            include:{model:Country,atributes:["id","name"]}
        })
res.json(activities);

    } catch (error) {
        console.log(error)
        res.json({error:"there is not an activity created"})
        
    }
})
module.exports = router;