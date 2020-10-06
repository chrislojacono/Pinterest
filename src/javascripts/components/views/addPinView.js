import form from '../forms/pinForm';

const addPinView = (user) => {
  $('#app').html('<div class="forms" id="pin-form"></div>');
  form.addPinForm(user);
  $('.no-boards').html('');
};

export default { addPinView };
