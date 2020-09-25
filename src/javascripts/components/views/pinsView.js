import pins from '../../helpers/data/pinData';

const pinMaker = (object) => {
  const domString = `<div class="card" id="${object.uid}">
    <div class="img-container card-body" style="background-image: url(${object.image})">
        <h3 class="card-title" style="color: black">${object.name}</h3>
        <a href="${object.url}" id="${object.uid}" class="btn btn-info see-pins">Visit Site</a>
      </div>
    </div>`;
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
      $('#app').append(pinMaker(newArray[0]));
    });
  });
};

export default { pinMaker, showPins };
