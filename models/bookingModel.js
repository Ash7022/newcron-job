const mongoose = require("mongoose")

const BookingSchema = new mongoose.Schema({
    from:String,
    to: String,
    Scheduled_Time:{
        type:Date,
        // Default:new Date(),
    },
    status:{
        type:String,
        default:"created"
    },
})
module.exports = mongoose.models.Booking || mongoose.model('Booking',BookingSchema);