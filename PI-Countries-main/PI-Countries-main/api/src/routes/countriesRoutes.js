const express= require("express");
const {Op}=require("sequelize");

const router=express.Router();

const {Country,Activity}=require("../db");


router.use(express.json());

router.get("/",async(req,res)=>{
    const{name}=req.query;
    try {
        if(name){
            let findName=await Country.findAll({
                where:{
                    name:{
                        [Op.iLike]:`%${name}%`
                    }
                },
                include:Activity
            })
            if(findName.length){
                return res.json(findName);
            }
            return res.
            status(404)
            .json({
                error:"COUNTRY_NOT_FOUND",
                description:"the entered country does not exist."
            })
        }
        const countryInDB= await Country.findAll({
            include:{model:Activity}
        })
        res.status(200).json(countryInDB)

    } catch (error) {
        console.log("/routes/countries get error",error.message);
        return res.status(404)
        .send ({error:"NOT_FOUND",description:"Server error"})
    }
})
router.get("/:id",async(req,res)=>{
    const{id}=req.params;
    try {
        const country =await Country.findByPk(id,{
            include:{
                model:Activity,
            }
        })
        country
        ?res.status(200).json(country)
        :res.status(404).json(
            {error:"COUNTRY_NOT_FOUND",
        description:`There is nit a country whit ${id.toUpperCase()}`
    })
    } catch (error) {
      console.log("/routes/countriesRoutes/:id get error",error);
      res.status(500).send({error:"ID_ERROR",description: "Error found ID"} )
       }
       
})
router.get("/countries/population", async(req,res)=>{
    
    try {
        const countries=await country.findAll()
        const countriesFiltrados=countries.filter(countries=>countries.Population.length>6)
res.status(200).json(countriesFiltrados)
    } catch (e) {
    
    console.log(error)
    }
})
module.exports=router;