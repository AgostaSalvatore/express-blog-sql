const express = require("express");
const app = express();
const port = 3000;

//middleware
app.use(express.json());

//asset statici
app.use(express.static('public'));

app.get('/', (req, res) => {
    console.log('ciao');
    res.send('ciao')
})
//listen
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
