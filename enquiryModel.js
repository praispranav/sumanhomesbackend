var mongoose = require("mongoose");

const CartSchema = new mongoose.Schema(
  {
   name: { type: String, required: true },
   mobile: { type: Number, required: true },
    message: { type: String, required: true },
},
  { collection: "enquiry" }
);

module.exports = mongoose.model("Enquiry", CartSchema);