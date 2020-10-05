import form from '../forms/pinForm';

const addPinView = () => {
  $('#app').html('<div id="pin-form"></div>');
  form.addPinForm();
};

export default { addPinView };
