import firebase from 'firebase/app';
import 'firebase/auth';

const logoutEvent = () => {
  $('#navbar-logout-button').on('click', (e) => {
    e.preventDefault();
    window.sessionStorage.removeItem('ua');
    firebase.auth().signOut();
    window.location.href = '/';
  });
};

const myNavbar = (currentUser) => {
  $('#nav').html(
    `<nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="#">Pinterest 2.0</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
      <li class="nav-item mx-3" id="boards-link">
        <a class="nav-link" href="#"><i class="far fa-clipboard"></i> Boards</a>
      </li>
      <li class="nav-item mx-3" id="add-board-link">
        <a class="nav-link" href="#"><i class="fas fa-plus-circle"></i> Add A Board</a>
      </li>
      <li class="nav-item mx-3" id="add-pin-link">
    <a class="nav-link" href="#"><i class="fas fa-map-pin"></i></i> Add A Pin</a>
    </li>
    </ul>
    <ul class="navbar-nav ml-auto">
        <div class="user-info">
          <li class="user-info-nav">
            Welcome, ${currentUser.name}!
          </li>
          <li class="user-info-nav">
          <img class="current-img" src="${currentUser.image}" alt="profile-pic">
          
           </li>
          </div>
          <li class="nav-item">
            <button class="nav-link btn btn-danger p-2" id="navbar-logout-button">Logout</button>
          </li>
        </ul>
      </div>
    </nav>`
  );

  logoutEvent();
};

export default { myNavbar };
