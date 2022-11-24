const express = require('express');
const router = express.Router();
const controller = require("../controllers/projects");

router.get('/', controller.getProjects);
router.get('/:id', controller.getProject);
router.post('/', controller.create);
router.put('/:id', controller.replace);
router.patch('/:id', controller.edit);
router.delete('/:id', controller.destroy);

module.exports = router;
