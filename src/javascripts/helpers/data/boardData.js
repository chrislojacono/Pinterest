import axios from 'axios';
import apiKeys from '../apiKeys.json';
import pins from './pinData';

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

const getSingleBoard = (boardUid) => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/Boards.json?orderBy="uid"&equalTo="${boardUid}"`).then((response) => {
    const board = Object.values(response.data);
    const thisBoard = board[0];
    resolve(thisBoard);
  }).catch((error) => reject(error));
});

const addBoard = (data) => axios.post(`${baseUrl}/Boards.json`, data).then((response) => {
  const update = { uid: response.data.name };
  axios
    .patch(`${baseUrl}/Boards/${response.data.name}.json`, update)
    .catch((error) => console.warn(error));
});

const deleteBoard = (boardUid) => {
  pins.getPinsOfBoards(boardUid).then((response) => {
    response.forEach((item) => {
      pins.deletePin(item.uid);
    });
  }).then(() => {
    getSingleBoard(boardUid).then((response) => {
      console.warn(response.uid);
      axios.delete(`${baseUrl}/Boards/${response.uid}.json`);
    });
  });
};

export default { getBoards, addBoard, deleteBoard };
