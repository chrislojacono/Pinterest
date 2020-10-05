import boardsView from './boardsView';
import addBoard from './addBoardView';
import addPin from './addPinView';
import updateBoard from './updateBoardView';
import updatePin from './updatePinView';

const viewHelper = (id, user, argument) => {
  switch (id) {
    case 'boards-link':
      return boardsView.boardsView(user);
    case 'add-board-link':
      return addBoard.addBoardView();
    case 'add-pin-link':
      return addPin.addPinView(user);
    case 'update-board-link':
      return updateBoard.updateBoardView(argument);
    case 'update-pin-link':
      return updatePin.updatePinView(argument, user);
    default:
      return console.warn('nothing is clicked');
  }
};
const viewListener = (view, user) => {
  console.warn(user);
  viewHelper(view, user);
  $('body').on('click', 'li.nav-item', (e) => {
    viewHelper(e.currentTarget.id, user);
  });
  $('body').on('click', '.update-board', (e) => {
    const boardUid = e.currentTarget.id;
    viewHelper('update-board-link', user, boardUid);
  });
  $('body').on('click', '.update-pin-btn', (e) => {
    const pinUid = e.currentTarget.id;
    viewHelper('update-pin-link', user, pinUid);
  });
};

export default { viewListener };
