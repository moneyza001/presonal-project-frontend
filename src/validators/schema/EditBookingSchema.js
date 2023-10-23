import Joi from "joi";

export default function makeEditBookingSchema() {
    const bookingSchema = Joi.object({
        bookTimeId: Joi.number().required(),
        serviceId: Joi.number().required(),
        hairStylistId: Joi.number().required(),
    }).options({ allowUnknown: true });
    return bookingSchema;
}
