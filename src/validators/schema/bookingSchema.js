import Joi from "joi";

export default function makeBookingSchema() {
    const now = new Date();
    const bookingSchema = Joi.object({
        bookDate: Joi.date().min(
            now.getFullYear() + "-" + (now.getMonth() + 1) + "-" + now.getDate()
        ),
        bookTime: Joi.string().required(),
        serviceName: Joi.string().required(),
    }).options({ allowUnknown: true });
    return bookingSchema;
}
