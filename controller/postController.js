const index = (req, res) => {
    res.send('elenco posts')
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
