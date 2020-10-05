import boardData from '../../helpers/data/boardData';
import board from '../cards/boardMaker';

const boardsView = (user) => {
  $('#app').html('');
  boardData.getBoards(user).then((response) => {
    if (response.length) {
      response.forEach((item) => {
        $('#app').append(board.boardMaker(item));
      });
    } else {
      $('#app').append('<h2>No Boards Yet!</h2>');
    }
  });
};

export default { boardsView };
