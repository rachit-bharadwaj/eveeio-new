require('dotenv').config()
const express = require('express')
const app = express()
const cors = require('cors')
const port = process.env.PORT
const{rentalFormValidation,
    telemeticsFormValidation,
    franchiseFormValidation,
    thirdpartyFormValidation,
    quickenquiryFormValidation} = require('./validations/formValidations')
const rentalModel = require('./models/rentalModel')
const telemeticsModel = require('./models/telemeticsModel')
const franchiseModel = require('./models/franchiseModel')
const thirdpartyModel = require('./models/thirdpartyModel')
const quickenquiryModel = require('./models/quickenquiryModel')
const database = require('./database/connection')
const bodyParser = require('body-parser')
app.use(cors())
app.use(express.json())
app.use(bodyParser.urlencoded({     
    extended: true
  }));
app.use(bodyParser.json());
app.get("/", (req,res)=>
{  
     res.send("Welcome to the backend of Eveeio")
})

// rental form api 
app.post("/rentalform", async (req,res)=>
{
    const { error } = rentalFormValidation(req.body);
    if (error) {
      return res.status(400).json({
        success: false,
        message: error.message,
      });
    }

    try{
         const rentalform = await rentalModel.create(req.body)
         return res.status(200).json({
            success:true,
            data:rentalform
         })
    }
    catch(error)
    {
        return res.status(400).json({
            success: false,
            message: error.message,
          });
    }
})
// telemetics form 
app.post("/telemeticsform", async (req,res)=>
{
    const { error } = telemeticsFormValidation(req.body);
    if (error) {
      return res.status(400).json({
        success: false,
        message: error.message,
      });
    }

    try{
         const rentalform = await telemeticsModel.create(req.body)
         return res.status(200).json({
            success:true,
            data:rentalform
         })
    }
    catch(error)
    {
        return res.status(400).json({
            success: false,
            message: error.message,
          });
    }
})

// franchise form 
app.post("/franchiseform", async (req,res)=>
{
    const { error } = franchiseFormValidation(req.body);
    if (error) {
      return res.status(400).json({
        success: false,
        message: error.message,
      });
    }

    try{
         const rentalform = await franchiseModel.create(req.body)
         return res.status(200).json({
            success:true,
            data:rentalform
         })
    }
    catch(error)
    {
        return res.status(400).json({
            success: false,
            message: error.message,
          });
    }
})
// thirdpartyform 
app.post("/thirdpartyform", async (req,res)=>
{
    const { error } = thirdpartyFormValidation(req.body);
    if (error) {
      return res.status(400).json({
        success: false,
        message: error.message,
      });
    }

    try{
         const rentalform = await thirdpartyModel.create(req.body)
         return res.status(200).json({
            success:true,
            data:rentalform
         })
    }
    catch(error)
    {
        return res.status(400).json({
            success: false,
            message: error.message,
          });
    }
})
// quickenquiry form  
app.post("/quickenquiryform", async (req,res)=>
{
    const { error } = quickenquiryFormValidation(req.body);
    if (error) {
      return res.status(400).json({
        success: false,
        message: error.message,
      });
    }

    try{
         const rentalform = await quickenquiryModel.create(req.body)
         return res.status(200).json({
            success:true,
            data:rentalform
         })
    }
    catch(error)
    {
        return res.status(400).json({
            success: false,
            message: error.message,
          });
    }
})

app.listen(port,()=>{
    database.databaseConnection();
    console.log(`Server is running at ${port}`)
})

