import form from '../forms/boardForm';

const addBoardView = () => {
  $('#app').html('<div  class="forms" id="board-form"></div>');
  form.addBoardForm();
  $('.no-boards').html('');
};

export default { addBoardView };
