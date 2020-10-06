# Pinterest 2.0
This project was to build a site just like Pinterest. The user should be able to store different boards with unique pins for each and should be able to edit the boards and pins and keep images and website addresses within each.

## The Motivation
The goal was to use firebase effecively with OAuth and its realtime database. We wanted to be able to use full CRUD capabilities with using all API calls and storing no data locally.

## Build Status
[![Netlify Status](https://api.netlify.com/api/v1/badges/adc4fd74-3e40-4fac-9964-d49ef94cd572/deploy-status)](https://app.netlify.com/sites/pinterest2/deploys)

## Code Style
Eslint with Air bnb Javascript style guide

## Screenshots
![Screen Shot 2020-10-05 at 8 50 08 PM](https://user-images.githubusercontent.com/66916708/95150575-1371ca00-074e-11eb-93d8-7fd1896e23e4.png)

![Screen Shot 2020-10-05 at 1 34 21 PM](https://user-images.githubusercontent.com/66916708/95119099-0be00000-0711-11eb-9cd5-8d37690b775a.png)

## Tech/Framework
Javascript Es6/Nodejs/Jquery

## Features
Full CRUD capabilities, User Autherization with Firebase

## Code Snippet
```
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

const addPin = (data) => axios.post(`${baseUrl}/Pins.json`, data).then((response) => {
  const update = { uid: response.data.name };
  axios
    .patch(`${baseUrl}/Pins/${response.data.name}.json`, update)
    .catch((error) => console.warn(error));
});
```

## ERD 
![Screen Shot 2020-10-05 at 1 48 26 PM](https://user-images.githubusercontent.com/66916708/95119371-798c2c00-0711-11eb-81c0-f6266777221f.png)

## Deployed Site
https://pinterest2.netlify.app/#
