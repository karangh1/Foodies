import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import cors from 'cors'
import helmet from 'helmet'
import morgan from 'morgan'
import {fileURLToPath} from 'url'
import path from 'path'
import Routes from './routes/routes.js'
import dotenv from 'dotenv'

//midleware
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config();
const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({  extended: true }));
app.use(cors());

//routes
app.use('/',Routes)

console.log(process.env.PORT)

mongoose.set("strictQuery", false);
mongoose.connect('mongodb+srv://karan:karan143@cluster0.65ry3nx.mongodb.net/Hotel?retryWrites=true&w=majority',{
    useNewUrlParser:true,
    useUnifiedTopology:true,
}).then(()=>{
    app.listen(3001,()=>{console.log("connected to the databse....")})

}).catch((err)=>{console.log(err)})




