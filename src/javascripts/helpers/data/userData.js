import axios from 'axios';
import apiKeys from '../apiKeys.json';

const baseUrl = apiKeys.firebaseKeys.databaseURL;

const checkIfUserExistsInFirebase = (user) => {
  axios
    .get(`${baseUrl}/users.json?orderBy="uid"&equalTo="${user.uid}"`)
    .then((resp) => {
      if (Object.values(resp.data).length === 0) {
        axios.post(`${baseUrl}/farmers.json`, user).then((response) => {
          const update = { firebaseKey: response.data.name };
          axios
            .patch(`${baseUrl}/users/${response.data.name}.json`, update)
            .catch((error) => console.warn(error));
        });
      } else {
        console.warn('User Already Exists');
      }
      window.sessionStorage.setItem('ua', true);
    })
    .catch((error) => console.error(error));
};

export default { checkIfUserExistsInFirebase };
