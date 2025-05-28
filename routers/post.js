const express = require("express");
const router = express.Router();
const postController = require('../controller/postController');

//rotte crud per i blog
router.get('/', postController.index)

router.get('/:id', postController.show)

router.delete('/:id', postController.destroy)

module.exports = router;