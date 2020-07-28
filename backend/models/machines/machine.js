const mongoose = require("mongoose");

//*********Schema******** */
const Schema = mongoose.Schema;
const Machine = new Schema({
  name: {
    type: String,
    required: true,
  },
  reference: {
    type: String,
    required: true,
  },
  family: {
    type: String,
  },

  state: {
    type: String,
  },
  brand: {
    type: String,
  },
  supplierName: {
    type: String,
  },
  supplierContact: {
    type: String,
  },
  serialNumber: {
    type: String,
  },
  dateOfPurchase: {
    type: String,
  },
  inventory: {
    type: String,
  },
  isbn: {
    type: String,
  },
  department: {
    type: String,
    required: true,
  },
  // image: {
  //   type: String,
  // },
  comment: {
    type: String,
  },
});

// Model
const MachineList = mongoose.model("MachineList", Machine);

module.exports = MachineList;
