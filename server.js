// express
const express = require('express');
// express variable
const app = express();

// *********************************** MODELS
const pokemon = require('./models/pokemon')




// middleware -------------------------------------------
app.set("view engine", "jsx");
app.engine("jsx", require("express-react-views").
createEngine());

app.use(express.json()) //thunderware to get json

// ----------- tells express to use middleware
app.use(express.urlencoded({extended:false}));
// ---------------- middleware?
app.use((req, res, next) => {
    console.log('I run for all routes');
    next();
});


// ****************************************** ROUTE
app.get("/", (req,res) => {
    res.send("<h1>Welcome to the Pokemon App!</h1>")
})

app.get('/pokemon', (req,res) => {
    res.send(pokemon)
})




// ********************************************* SERVER
app.listen('3000', (req,res) => {
    console.log('Server is now listening on port 3000')
})