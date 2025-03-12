import express from "express"
import cors from "cors"
import Transaction from "./models/Transaction.js"
import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config();

const app = express(); 

app.use(cors())
app.use(express.json())

app.get('/api/test', (req, res) => {
    res.json({ body: 'test ok' }); 

})

app.post('/api/transaction', async (req, res) => {
    await mongoose.connect(process.env.MONGO_URL);
    
    const {price, name, description, datetime } = req.body;
    const transaction = await Transaction.create({price, name, description, datetime });

    res.json(transaction);
});

app.get("/api/transactions",async(req,res)=>{

    await mongoose.connect(process.env.MONGO_URL);

    const transactions = await Transaction.find();

    res.json(transactions)

})



app.listen(4030, () => {
    console.log('Server is running on port 4030');
});

