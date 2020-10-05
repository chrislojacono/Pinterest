import boardsView from './boardsView';
import addBoard from './addBoardView';
import addPin from './addPinView';
import updateBoard from './updateBoardView';
import updatePin from './updatePinView';

const viewHelper = (id, argument, user) => {
  switch (id) {
    case 'boards-link':
      return boardsView.boardsView(user);
    case 'add-board-link':
      return addBoard.addBoardView();
    case 'add-pin-link':
      return addPin.addPinView();
    case 'update-board-link':
      return updateBoard.updateBoardView(argument);
    case 'update-pin-link':
      return updatePin.updatePinView(argument);
    default:
      return console.warn('nothing is clicked');
  }
};
const viewListener = (view, user) => {
  viewHelper(view);
  $('body').on('click', 'li.nav-item', (e) => {
    viewHelper(e.currentTarget.id, user);
  });
  $('body').on('click', '.update-board', (e) => {
    const boardUid = e.currentTarget.id;
    viewHelper('update-board-link', boardUid);
  });
  $('body').on('click', '.update-pin-btn', (e) => {
    const pinUid = e.currentTarget.id;
    viewHelper('update-pin-link', pinUid);
  });
};

export default { viewListener };
