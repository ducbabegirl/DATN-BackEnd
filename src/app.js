import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import mongoose from 'mongoose';



import bannerRoute from './routes/Banner';


const app = express();

const URL = 'mongodb+srv://duynguyen:Adu113210@cluster0.fh8cjz8.mongodb.net/?retryWrites=true&w=majority';
// middleware
app.use(cors());
app.use(morgan('tiny'));
app.use(express.json())

// route

app.use("/api",bannerRoute);



// connnect database
mongoose.connect(URL,{useNewUrlParser:true,useUnifiedTopology:true})
    .then(() => console.log("Kết nối db thành công"))
    .catch((error) => console.log(error));
    
// connection
const PORT = 8000;
app.listen(PORT, () => {
    console.log("Server is running port", PORT);
})