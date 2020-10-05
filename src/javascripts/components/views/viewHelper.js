import boardsView from './boardsView';
import addBoard from './addBoardView';
import addPin from './addPinView';

const viewHelper = (id) => {
  switch (id) {
    case 'boards-link':
      return boardsView.boardsView();
    case 'add-board-link':
      return addBoard.addBoardView();
    case 'add-pin-link':
      return addPin.addPinView();
    default:
      return console.warn('nothing is clicked');
  }
};
const viewListener = (view) => {
  viewHelper(view);
  $('body').on('click', 'li.nav-item', (e) => {
    viewHelper(e.currentTarget.id);
  });
};

export default { viewListener };
