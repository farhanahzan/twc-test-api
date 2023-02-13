const ContactModel = require('../Models/ContactModel');

const handleErrors = (err) => {
  let errors = { fullname: '', email: '', phoneNumber: '', gender: '' };

  if (err.message === 'incorrect fullname')
    errors.fullname = 'This fullname is required';

  if (err.message === 'incorrect email')
    errors.email = 'This email is required';

  if (err.message === 'incorrect phoneNumber')
    errors.phoneNumber = 'This phoneNumber is required';

  if (err.message === 'incorrect gender')
    errors.gender = 'This gender is required';

  if (err.message.includes('validation failed')) {
    Object.values(err.errors).forEach(({ properties }) => {
      errors[properties.path] = properties.message;
    });
  }
  return errors;
};

module.exports.addContact = async (req, res, next) => {
  try {
    const contact = await ContactModel.create(req.body);

    res.status(201).json({ contact: contact._id, created: true });
  } catch (err) {
    const errors = handleErrors(err);

    res.json({ errors, created: false });
  }
};

module.exports.findAllContacts = async (req, res, next) => {
  try {
    const contact = await ContactModel.find();
  
    res.status(200).json({ contact: contact, getAllContact: true });
  } catch (err) {
    res
      .status(404)
      .json({ contact: 'No Contacts found', getAllContact: false });
  }
};

module.exports.deleteContact = async (req, res, next) => {
  try {
    const deleteContact = await ContactModel.findByIdAndRemove(
      req.params.id,
      req.body
    );
    res.status(200).json({ contact: deleteContact, deleted: true });
  } catch (err) {
    res.status(200).json({ contact: 'no contact deleted', deleted: false });
  }
};

module.exports.updateContact = async (req, res, next)=>{
  try{
const updateContact = await ContactModel.findByIdAndUpdate(req.params.id, req.body);
 res.status(200).json({ contact: updateContact, updated: true });
  }catch(err){
    res.status(200).json({ contact: 'no contact updated', updated: false });
  }
}