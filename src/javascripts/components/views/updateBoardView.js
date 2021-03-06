import boardData from '../../helpers/data/boardData';
import form from '../forms/updateBoardForm';

const updateBoardView = (uid) => {
  $('#app').html('<div class="forms" id="update-board-form"></div>');
  boardData.getSingleBoard(uid).then((response) => {
    form.updateBoardForm(response);
  });
  $('.no-boards').html('');
};
export default { updateBoardView };
