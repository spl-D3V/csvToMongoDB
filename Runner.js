const mongoose = require('mongoose');
const {Schema} = mongoose;
let RunnerSchema = new Schema({
    _id : Schema.Types.ObjectId,
    dorsal: {
        type: Number,
        unique: true,
        required: [true, 'campo obligatorio'],
        min:1,
        max:4
    },
    apellidos: {
        type: String,
        trim: true,
        required: [true, 'campo obligatorio'],
        minlength: 3
    },
    nombre: {
        type: String,
        trim: true,
        required: [true, 'campo obligatorio'],
        minlength: 3
    },
    categoria: {
        type: String,
        required: [true, 'campo obligatorio']
    },
    sexo: {
        type: Number,
        default: 0,
        min:1,
        max:1
    },
    meta: {
        type: Boolean,
        default: false
    },
    llegada:{
        type: Number,
        default: null
    }
});

let Runner = mongoose.model('Runner', RunnerSchema);
module.exports = {Runner};