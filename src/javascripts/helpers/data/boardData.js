import axios from 'axios';
import apiKeys from '../apiKeys.json';

const baseUrl = apiKeys.firebaseKeys.databaseURL;

const getBoards = () => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/Boards.json`).then((response) => {
    const boards = response.data;
    const boardsArray = [];
    if (boards) {
      Object.keys(boards).forEach((boardId) => {
        boardsArray.push(boards[boardId]);
      });
    }
    resolve(boardsArray);
  })
    .catch((error) => reject(error));
});

const addBoard = (data) => axios.post(`${baseUrl}/Boards.json`, data).then((response) => {
  const update = { uid: response.data.name };
  axios
    .patch(`${baseUrl}/Boards/${response.data.name}.json`, update)
    .catch((error) => console.warn(error));
});

export default { getBoards, addBoard };
