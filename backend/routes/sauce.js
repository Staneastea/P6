const express = require('express');
const router = express.Router();
const sauceCtrl = require ('../controller/sauce');

router.post('/', sauceCtrl.createSauce);
router.get('/', sauceCtrl.getSauce);
router.get('/:id', sauceCtrl.getOneSauce);
router.delete('/:id', sauceCtrl.deleteOne);
router.put('/:id', sauceCtrl.modifySauce);

module.exports = router;