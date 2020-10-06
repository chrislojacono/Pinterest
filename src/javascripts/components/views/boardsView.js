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
      $('#app').html('<h1 class="no-boards">No Boards Yet! Head to the Navbar to add Boards, then add Pins to them of things you love!</h1>');
    }
  });
};

export default { boardsView };
