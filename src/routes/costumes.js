const express = require('express');
const router = express.Router();
const costumesCtlr = require('../controllers/costumes');
const tagsCtlr = require('../controllers/tags');

// costumes
router.get('/', costumesCtlr.getAll);
router.get('/:id', costumesCtlr.getById);
router.post('/', costumesCtlr.create);
router.put('/:id', costumesCtlr.update);
router.delete('/:id', costumesCtlr.deleteById);

// tags
router.get('/:id/tags', tagsCtlr.getById);
router.post('/:id/tags', tagsCtlr.create);
router.put('/:id/tags/:tagId', tagsCtlr.update);
router.delete('/:id/tags/:tagId', tagsCtlr.deleteById);

module.exports = router;