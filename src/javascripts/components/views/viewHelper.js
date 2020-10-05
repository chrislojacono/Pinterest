import boardsView from './boardsView';
import addBoard from './addBoardView';
import addPin from './addPinView';
import updateBoard from './updateBoardView';

const viewHelper = (id, argument) => {
  switch (id) {
    case 'boards-link':
      return boardsView.boardsView();
    case 'add-board-link':
      return addBoard.addBoardView();
    case 'add-pin-link':
      return addPin.addPinView();
    case 'update-board-link':
      return updateBoard.updateBoardView(argument);
    default:
      return console.warn('nothing is clicked');
  }
};
const viewListener = (view) => {
  viewHelper(view);
  $('body').on('click', 'li.nav-item', (e) => {
    viewHelper(e.currentTarget.id);
  });
  $('body').on('click', '.update-board', (e) => {
    const boardUid = e.currentTarget.id;
    viewHelper('update-board-link', boardUid);
  });
};

export default { viewListener };
