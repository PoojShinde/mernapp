import { connect } from 'mongoose';
import mongoose from 'mongoose';
const mongoURI = "mongodb+srv://goodfood:goodfood@222@cluster0.ms3kvqw.mongodb.net/?retryWrites=true&w=majority/goodfootmern"
const mongoDB = async()=>{
 await mongoose.connect(mongoURI,{useNewUrlParser : true},async(err,result) =>{
    if(err) console.log("---",err)
    else{
        console.log("connected");
        const fetched_data = await mongoose.connection.db.collection("fooddata2");
        fetched_data.find({}).toArray(function(err, data){
            if(err) console.log(err);
            else console.log(data);
        })

}
    
});
}


export default mongoDB; 


// import mongoose from 'mongoose'
// import colors from 'colors'
// import dotenv from 'dotenv'

// const  connectDB = async () =>{
//     try{
//         const conn = await mongoose.connect(process.env.MONGO_URL)
//         console.log(`connected to database ${conn.connection.host}`.bgMagenta.white);
        

//     }catch(error){
//         console.log(`Error in mangodb ${error}`.bgRed.white)
//     }
// };

// export default connectDB;
