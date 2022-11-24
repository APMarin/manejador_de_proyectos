const express = require('express');
const router = express.Router();
const controller = require("../controllers/skills");

router.get('/', controller.getSkills);
router.get('/:id', controller.getSkill);
router.post('/', controller.create);
router.put('/:id', controller.replace);
router.patch('/:id', controller.edit);
router.delete('/:id', controller.destroy);

module.exports = router;
