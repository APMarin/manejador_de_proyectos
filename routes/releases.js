const express = require('express');
const router = express.Router();
const controller = require("../controllers/releases");

router.get('/', controller.getReleases);
router.get('/:id', controller.getRelease);
router.post('/', controller.create);
router.put('/:id', controller.replace);
router.patch('/:id', controller.edit);
router.delete('/:id', controller.destroy);

module.exports = router;
