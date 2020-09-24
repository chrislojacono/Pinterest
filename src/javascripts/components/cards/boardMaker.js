const boardMaker = (board) => {
  const domString = `<div class="card" id="${board.uid}">
  <div class="img-container card-body" style="background-image: url(${board.image})">
      <h5 class="card-title">${board.name}</h5>
      <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
  </div>`;
  return domString;
};

export default { boardMaker };
