import pinData from '../../helpers/data/pinData';
import form from '../forms/updatePinForm';

const updatePinView = (uid, userId) => {
  $('#app').html('<div id="update-pin-form"></div>');
  pinData.getSinglePin(uid).then((response) => {
    form.updatePinForm(response, userId);
  });
};
export default { updatePinView };
