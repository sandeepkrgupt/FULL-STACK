const mongoose = require('mongoose');

const menAppSchema = new mongoose.Schema({
    techName: {
        type: String,
        required: true
    },
    companyName: {
        type: String,
        required: true,
    },
    users: {
        type: Number,
        required: true,
        default: 0
    }
});

module.exports = mongoose.model('menAppSchemaExport', menAppSchema);