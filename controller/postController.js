//connessione al db
const connection = require('../data/dbBlog');

const index = (req, res) => {
    //query
    const sql = 'SELECT * FROM posts'
    connection.query(sql, (err, results) => {
        if (err) {
            console.log(err);
            res.status(500).json({ error: 'Error during the reading of posts' });
        } else {
            res.json(results);
        }
    })
}

const show = (req, res) => {
    const id = req.params.id
    res.send('elenco post con id ' + id)
}

const destroy = (req, res) => {

}

module.exports = {
    index,
    show,
    destroy
}
