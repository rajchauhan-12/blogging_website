const mongoose = require('mongoose')

const connectDB = async()=>{
    try{
        // console.log('conecting to the database')

        await mongoose.connect(process.env.DATABASE_URI);

    }catch(err){
        console.log('Error while conecting to the database : ',err)
    }
}


module.exports = connectDB;