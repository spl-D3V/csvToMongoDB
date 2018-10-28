const express = require('express');
const fileUpload = require('express-fileupload');
const mongoose = require('mongoose');
const app = express();
const template = require('./template');
const upload = require('./upload');

app.set('port', process.env.PORT || 3000);
// Middleware
mongoose.connect('mongodb://localhost:27017/Clasificatoria'); 
app.use(fileUpload());
// Routes
app.get('/template', template.get);
app.get('/', function (req, res) { res.sendFile(__dirname + '/index.html'); });
app.post('/', upload.post);
// Server
app.listen(app.get('port'), ()=> console.log('Server on port 3000'));