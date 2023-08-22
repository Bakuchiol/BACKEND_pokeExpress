// express
const express = require('express');
// express variable
const app = express();
// mongoose
const mongoose = require('mongoose');
// required for .env
require('dotenv').config()
// *********************************** MODELS
const pokemon = require('./utilities/pokemon') // hardcoded
const Pokemon = require('./models/Pokemons')

// **************************************************** MIDDLEWARE
app.set("view engine", "jsx");
app.engine("jsx", require("express-react-views").createEngine());
app.use(express.json()) //thunderclient to get json
// delete
const methodOverride = require('method-override');
app.use(methodOverride('_method'));

app.use((req, res, next) => {
    console.log("Gotta Catch 'em All!");
    next();
});
// ----------- tells express to use middleware
app.use(express.urlencoded({extended:false}));

// css - layout
app.use(express.static('public'));
// ------ MONGOOSE
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connection.once('open', ()=> {
    console.log('mongo mongo 🦛');
});


// *************************************************************** ROUTE
app.get("/", (req,res) => {
    res.render("Landing", { pokemon : pokemon })
})

// *** INDEX ***
app.get('/pokemon', async(req,res) => {
    try {
        const AllPokemon = await Pokemon.find({});
        res.render("Index", 
        { pokemon : AllPokemon }
        )
    } catch (error) {
        console.error(error);
        res.status(500).send("Pokèmon Server Error")
    }
});

// *** POST ***
app.post('/pokemon', async(req,res) => {
    try {
        const newPokemon = await Pokemon.create(req.body)
        // res.send(newPokemon)
        res.redirect('/pokemon')
    } catch (error) {
        console.error(error);
        res.status(500).send("Pokèmon Server Error")
    }
});

// *** NEW ROUTE **
app.get('/pokemon/new', (req,res) => {
    res.render("New")
})

// *** SEED ***
// app.get('/pokemon/seed', async(req, res) => {
//     await Pokemon.deleteMany({});
//     await Pokemon.create(pokemonData);

//     res.redirect('/pokemon')
// })

// *** DELETE ***
app.delete('/pokemon/:id', async(req,res) => {
    try {
        await Pokemon.findByIdAndDelete(req.params.id)
        res.redirect('/pokemon')
    } catch (error) {
        console.error(error)
        res.status(500).send('Pokèmon Server Error');
    }
})

// *** PUT -- update route ***
app.put('/pokemon/:id', async(req,res) => {
    try {
        const updatedPokemon = await Pokemon.findByIdAndUpdate(req.params.id, req.body)
        res.redirect(`/pokemon/${req.params.id}`)
    } catch (error) {
        console.error(error)
        res.status(500).send('Pokèmon Server Error');
    }
})

// *** EDIT ***
app.get('/pokemon/:id/edit', async(req,res) => {
    try {
        const foundPokemon = await Pokemon.findById(req.params.id)
        res.render('Edit',{
            pokemon : foundPokemon
        })
    } catch (error) {
        console.error(error)
        res.status(500).send("Pokèmon Server Error");
    }
})

// *** SHOW ***
app.get('/pokemon/:id', async(req, res) => {
    // res.send(pokemon[req.params.id])
    // res.render("Show", {pokemon:[req.params.id]})
    // res.render("Show", 
    // {pokemon: pokemon[req.params.id]})
    try {
        const eachPokemon = await Pokemon.findById(req.params.id)
        await res.render("Show", {
            pokemon : eachPokemon
        })
    } catch (error) {
        console.error(error)
        res.status(500).send("Pokèmon Server Error");
    }
});

// ****************************************************************** SERVER
app.listen('3000', (req,res) => {
    console.log('👽 Server 3000 👽')
})