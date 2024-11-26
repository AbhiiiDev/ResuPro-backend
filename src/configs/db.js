const mongoose=require('mongoose');

export const connectDB=()=>{
    try {
        mongoose.connect();
        console.log('mongodb connected');
    } catch (error) {
        console.log('problem while connect mongoose')
    }
}