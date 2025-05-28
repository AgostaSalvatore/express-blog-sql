const express = require("express");
const app = express();
const port = 3000;

//import il router
const postRouter = require('./routers/post');

//middleware
app.use(express.json());

//asset statici
app.use(express.static('public'));

//entry point
app.get('/', (req, res) => {
    console.log('Benvenuto nel mio Blog');
    res.send('Benvenuto nel mio Blog')
})

app.use('/posts', postRouter);

//listen
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
