const mongoose = require('mongoose');

const menAppSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        default: "Sandeep"
    },
    company: {
        type: String,
        required: true,
        default: "ABC.Com"
    },
    users: {
        type: Number,
        required: true,
        default: 0
    }
});

module.exports = mongoose.model('menAppSchema', menAppSchema);// menAppSchemaExport it is a collection.