import boardsView from './boardsView';

const viewHelper = (id) => {
  switch (id) {
    case 'boards-link':
      return boardsView.boardsView();
    // case 'cows-link':
    //   return cowView.cowsView();
    // case 'add-cow-link':
    //   return addCow.addCowView();
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
