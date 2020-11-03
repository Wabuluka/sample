const express = require('express');
const contactController = require('../controller/contact')


const router = express.Router();

router.get('/', contactController.getContacts);
router.post('/', contactController.createContact);
router.get('/:id', contactController.getContact);
router.delete('/:id', contactController.deleteContact);
router.put('/:id', contactController.editContact);

module.exports = router;