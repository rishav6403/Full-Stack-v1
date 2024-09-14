import express from 'express'
import dotenv from 'dotenv'

dotenv.config()
const app = express()

const PORT = process.env.PORT;

app.get("/", (req, res)=>{
    return res.send("Hii ")
})

app.listen(PORT, ()=> console.log(`Server started at ${PORT}`));


