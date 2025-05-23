import mongoose,{Schema,Document} from "mongoose";

export interface Message extends Document
{
    content:string;
    createdAt:Date
}

const MessageSchema: Schema<Message>=new Schema({
content:{
    type:String,
    required:true,
},

createdAt:{
    type:Date,
    required:true,
    default:Date.now
}
})



export interface User extends Document
{
    username:string;
    email:string;
    password:string;
    verifyCode:string;
    verifyCodeExpiry:Date;
    isAcceptingMessage:boolean;
    message:Message[]

   
}



const UserSchema: Schema<User>=new Schema({
    username:{
        type:String,
        required:[true,"Username is required"],
        trim:true,
        unique:true
    },
    
    email:{
        type:String,
        required:[true,"email is required"],
        unique:true,


        match:[ ^\S+@\S+\.\S+$ ,'Invalid email address']
    },


    password:{
        type:String,
        required:[true,"Password is required"]

    })