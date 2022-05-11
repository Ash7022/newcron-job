import dbConnect from "../../../db/dbconnect";
import cron from "node-cron"

import bookingModel from "../../../models/bookingModel";

dbConnect()


// get all  recordds, post a new record
export default async function cornjob (){
    const timeNow = new Date();
    timeNow.setTime(timeNow.getTime() + 2*60*60*1000);
    const time = timeNow.getTime();
        const bookings = await bookingModel.findOne({status:"created"})
        const id = bookings._id;
    const status = {
        status:"informed"
        
    }
    const update = await bookingModel.findByIdAndUpdate(id,status,{
        new:true,
        runValidators:true,
        useFindAndModify:false
    })
    console.log("success",id, update);

};
cron.schedule('* * * * *', () => {
    console.log('running a task every minute');
    cornjob();
   
  });
