import pins from '../../helpers/data/pinData';

const pinMaker = (object) => {
  const domString = `<div class="card" id="${object.uid}">
  <a href="${object.url}" id="${object.uid}" class="btn btn-info see-pins">Visit Site</a>
    <a  href="${object.url}"><div class="img-container card-body" style="background-image: url(${object.image})">
    </div></a>
    <h3 class="card-title" style="color: black">${object.name}</h3>
    <button id="${object.uid}" class="btn btn-outline-warning update-pin-btn">Update Pin</button>
    <button id="${object.uid}" class="btn btn-danger delete-pin"><i id="pin-icon" class="far fa-trash-alt"></i>Delete Pin</button>
    </div>`;
  $('body').on('click', '.delete-pin', (e) => {
    e.stopImmediatePropagation();
    const firebaseKey = e.currentTarget.id;
    $(`.card#${firebaseKey}`).remove();
    pins.deletePin(firebaseKey);
  });
  return domString;
};

const showPins = () => {
  $('body').on('click', '.see-pins', (e) => {
    e.stopImmediatePropagation();
    $('#app').html('');
    pins.getPinsOfBoards(e.currentTarget.id).then((response) => {
      const newObject = response;
      const newArray = [];
      Object.keys(newObject).forEach((item) => {
        newArray.push(newObject[item]);
      });
      newArray.forEach((item) => {
        $('#app').append(pinMaker(item));
      });
    });
  });
};

export default { pinMaker, showPins };
