import boardData from '../../helpers/data/boardData';
import board from '../cards/boardMaker';

const boardsView = () => {
  $('#app').html('');
  boardData.getBoards().then((response) => {
    if (response.length) {
      response.forEach((item) => {
        $('#app').append(board.boardMaker(item));
      });
    } else {
      $('#app').append('<h2>NO BOARDS</h2>');
    }
  });
};

export default { boardsView };
