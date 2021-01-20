const express = require('express');
var appRoutes = require("./routes/RESTapi");
const mongoose = require('mongoose')
var bodyParser = require('body-parser');
var cors = require('cors');
const PORT = 4000;
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
const url = 'mongodb://localhost/RTOData'
mongoose.connect(url, { useNewUrlParser: true })
const con = mongoose.connection
con.on('open', () => {
    console.log("database connected");
})

app.use('/users', appRoutes);
app.use('/questions', appRoutes);
app.get('/', (req, res) => {
    res.send("This is server....");
});
app.listen(PORT, () => {
    console.log("running server on port " + PORT);
})