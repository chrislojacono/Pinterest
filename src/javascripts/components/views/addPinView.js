import form from '../forms/pinForm';

const addPinView = (user) => {
  $('#app').html('<div id="pin-form"></div>');
  form.addPinForm(user);
};

export default { addPinView };
