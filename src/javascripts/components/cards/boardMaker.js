import pinsView from '../views/pinsView';
import deleteBoard from '../../helpers/data/boardData';

const boardMaker = (board) => {
  const domString = `<div class="card grow" id="${board.uid}">
  <a href="#" id="${board.uid}" class="see-pins"><div  class="img-container card-body" style="background-image:linear-gradient(to bottom, rgba(209, 209, 219, 0.253), rgba(204, 174, 195, 0.73)), url(${board.image})">
      <h3 class="card-title grow">${board.name}</h3>
    </div></a>
    <div class="board-button">
    <a href="#" id="${board.uid}" class="btn btn-info pin-btn see-pins board-buttons"><i id="pin-icon" class="fas fa-map-pin"></i> Pins</a>
    <button class="btn btn-outline-warning update-board board-buttons" id="${board.uid}">Update Board</button>
    <button id="${board.uid}" class="btn btn-dark delete-board board-buttons"><i class="far fa-trash-alt"></i> Delete Board </button>
    </div>
  </div>`;
  $('body').on('click', '.delete-board', (e) => {
    e.stopImmediatePropagation();
    const firebaseKey = e.currentTarget.id;
    $(`.card#${firebaseKey}`).remove();
    deleteBoard.deleteBoard(firebaseKey);
  });

  pinsView.showPins();
  return domString;
};

export default { boardMaker };
