import Files from '../models/Files.js';
import mongoose from 'mongoose';

const getFiles = async(req,res,next)=>{
    let File;
    try{
        File = await Files.find();
    }catch(err){
        console.log(err);
    }
    if(!Files){
        return res
        .status(404)
        .json({message:"File not Found.."})
    }
    return res
    .status(200)
    .json({File})
};

export default getFiles;