import boardsView from './boardsView';

const viewHelper = (id) => {
  switch (id) {
    case 'boards-link':
      return boardsView.boardsView();
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
