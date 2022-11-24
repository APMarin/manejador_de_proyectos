const express = require('express');
const router = express.Router();
const controller = require("../controllers/boards");

router.get('/', controller.getBoards);
router.get('/:id', controller.getBoard);
router.post('/', controller.create);
router.put('/:id', controller.replace);
router.patch('/:id', controller.edit);
router.delete('/:id', controller.destroy);

module.exports = router;
