import boardsView from './boardsView';

const viewHelper = (id, uid) => {
  switch (id) {
    case 'boards-link':
      return boardsView.boardsView(uid);
    default:
      return console.warn('nothing is clicked');
  }
};
const viewListener = (view, uid) => {
  viewHelper(view);
  $('body').on('click', 'li.nav-item', (e) => {
    viewHelper(e.currentTarget.id, uid);
  });
};

export default { viewListener };
