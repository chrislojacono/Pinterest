import axios from 'axios';
import apiKeys from '../apiKeys.json';

const baseUrl = apiKeys.firebaseKeys.databaseURL;

const getPinsOfBoards = (boardUid) => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/Pins.json?orderBy="boardUid"&equalTo="${boardUid}"`).then((response) => {
    const pinsOfBoards = response.data;
    const pins = [];
    if (pinsOfBoards) {
      Object.keys(pinsOfBoards).forEach((item) => {
        pins.push(pinsOfBoards[item]);
      });
    }
    resolve(pins);
  }).catch((error) => reject(error));
});

export default { getPinsOfBoards };
