const express = require("express");
const path = require('path');
const bodyParser = require('body-parser');

const app = express();

app.use('/public', express.static(path.join(__dirname, "static")))
app.use(bodyParser.urlencoded({extended: false}));

app.get('/', (req,res) => {
    res.sendFile(path.join(__dirname, "static", "index.html"))
})

app.post('/', (req,res) => {
    console.log(req.body);  //It shows the form the data
    //database action goes here.
    res.send("The data has been added Successfullly");
})


app.listen(3000);











// app.get('/example/:name', (req,res) => {
//     console.log(req.params);
//     console.log(req.query);
//     res.send(req.params.name)

// })