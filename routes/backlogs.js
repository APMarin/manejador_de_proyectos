const express = require('express');
const router = express.Router();
const controller = require("../controllers/backlogs");

router.get('/', controller.getBacklogs);
router.get('/:id', controller.getBacklog);
router.post('/', controller.create);
router.put('/:id', controller.replace);
router.patch('/:id', controller.edit);
router.delete('/:id', controller.destroy);

module.exports = router;
