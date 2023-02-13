const {
  addContact,
  findAllContacts,
  deleteContact,
  updateContact,
} = require('../Controllers/ContactControllers');
const { checkUser } = require('../Middlewares/AuthMiddleware');

const router = require('express').Router();

router.post('/contacts/new', addContact, checkUser);
router.get('/contacts', findAllContacts, checkUser);
router.delete('/contacts/:id', deleteContact)
router.put('/contacts/:id', updateContact)

module.exports = router;
