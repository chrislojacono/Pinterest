import firebase from 'firebase/app';
import 'firebase/auth';
import userData from './userData';
import auth from '../../components/auth/auth';
import myNavbar from '../../components/myNavbar/myNavbar';
import view from '../../components/views/viewHelper';

const checkLoginStatus = () => {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      const currentUser = userData.setCurrentUser(user);
      console.warn(currentUser.uid);
      myNavbar.myNavbar(currentUser);
      view.viewListener('boards-link', currentUser.uid);
      $('#app').html('');
    } else {
      auth.loginButton();
      $('#nav').html('');
    }
  });
};

export default { checkLoginStatus };
