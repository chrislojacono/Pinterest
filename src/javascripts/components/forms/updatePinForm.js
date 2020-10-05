import pinData from '../../helpers/data/pinData';
import boardData from '../../helpers/data/boardData';

const updatePinForm = (pinObject, userId) => {
  console.warn(userId);
  $('#update-pin-form').html(`<h2>Update A Pin</h2>
    <div id="success-message"></div>
    <form>
      <div id="error-message"></div>
      <div class="form-group">
        <label for="name">Name</label>
        <input type="text" class="form-control" id="name" value="${pinObject.name}"placeholder="Example: Climbing, Art, etc.">
      </div>
      <div class="form-group">
        <label for="image">Image</label>
        <input type="text" class="form-control" id="image" value="${pinObject.image}" placeholder="Url address">
      </div>
      <div class="form-group">
      <label for="URL">Website Address</label>
      <input type="text" class="form-control" id="website" value="${pinObject.url} placeholder="Url address">
    </div>
      <div class="form-group">
        <label for="farmer">Board</label>
          <select class="form-control" id="board">
            <option value="">Select a Board</option>
          </select>
      </div>
      <button id="update-Pin-btn" type="submit" class="btn btn-info"><i class="fas fa-plus-circle"></i> Update Pin</button>
    </form>`);

  boardData.getBoards(userId).then((response) => {
    response.forEach((item) => {
      $('select').append(`<option value="${item.uid}" ${
        pinObject.boardUid === item.uid ? "selected ='selected'" : ''
      }>${item.name}</option>`);
    });
  });
  $('#update-Pin-btn').on('click', (e) => {
    e.preventDefault();

    const data = {
      name: $('#name').val() || false,
      image: $('#image').val() || false,
      url: $('#website').val() || false,
      boardUid: $('#board').val() || false,
    };

    if (Object.values(data).includes(false)) {
      $('#error-message').html(
        '<div class="alert alert-danger" role="alert">Please complete all fields</div>'
      );
    } else {
      $('#error-message').html('');
      pinData
        .updatePin(pinObject.uid, data)
        .then(() => {
          $('#success-message').html(
            '<div class="alert alert-success" role="alert">Your Pin Was Updated!</div>'
          );
        })
        .catch((error) => console.warn(error));
      setTimeout(() => {
        $('#succes-message').html('');
      }, 3000);
      $('#image').val('');
      $('#name').val('');
      $('#website').val('');
      $('#board').val('');
    }
  });
};

export default { updatePinForm };
