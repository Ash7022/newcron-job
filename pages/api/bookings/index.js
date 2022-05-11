import dbConnect from "../../../db/dbconnect";

import bookingModel from "../../../models/bookingModel";

dbConnect()

// get all  recordds, post a new record
export default async (req, res) => {
    const { method } = req

    switch (method) {
        case 'GET':
            try {
                const timeNow = new Date();
            timeNow.setTime(timeNow.getTime() + 2*60*60*1000);
            const time = timeNow.getTime();
                const bookings = await bookingModel.findOne({status:"created"})
                res.status(200).json({ success: true, Booking:bookings});
            } catch (error) {
                res.status(400).json({ success: false, })
            }
            break;


        case 'POST':
            try {
                const bookings = await bookingModel.create(req.body)
                res.status(200).json({ success: true, booking: bookings });
            } catch (error) {
               
                res.status(400).json({ success: false, })
            }
            break;
        default:
            res.status(400).json({success:false})
            break;
    }


}