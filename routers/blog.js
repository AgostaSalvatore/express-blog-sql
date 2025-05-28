const express = require("express");
const router = express.Router();

//rotte crud per i blog
app.get('/blog', (req, res) => {
    console.log('elenco blog')
    res.send('elenco blog')
})

app.get('/blog/:id', (req, res) => {
    const id = req.params.id
    console.log('elenco blog con id ' + id)
    res.send('elenco blog con id ' + id)
})

module.exports = router;