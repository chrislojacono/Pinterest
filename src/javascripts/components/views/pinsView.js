const pinMaker = (object) => {
  const domString = `<div class="card" id="${object.uid}">
    <div class="img-container card-body" style="background-image: url(${object.image})">
        <h3 class="card-title" style="color: black">${object.name}</h3>
        <a href="${object.url}" id="${object.uid}" class="btn btn-info see-pins">Visit Site</a>
      </div>
    </div>`;
  return domString;
};

export default { pinMaker };
