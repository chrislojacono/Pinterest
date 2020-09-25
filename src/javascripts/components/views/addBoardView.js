import form from '../forms/boardForm';

const addBoardView = () => {
  $('#app').html('<div id="board-form">Put Board Form Here</div>');
  form.addBoardForm();
};

export default { addBoardView };
