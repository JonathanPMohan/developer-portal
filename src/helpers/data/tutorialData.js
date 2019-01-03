import axios from 'axios';
import apiKeys from '../apiKeys';

const firebaseUrl = apiKeys.firebaseConfig.databaseURL;

const getTutorialsData = () => new Promise((resolve, reject) => {
  axios
    .get(`${firebaseUrl}/tutorials.json`)
    .then((res) => {
      const tutorialsArray = [];
      if (res.data !== null) {
        Object.keys(res.data).forEach((key) => {
          res.data[key].id = key;
          tutorialsArray.push(res.data[key]);
        });
      }
      resolve(tutorialsArray);
    })
    .catch(err => reject(err));
});

const deleteTutorial = tutorialId => axios.delete(`${firebaseUrl}/tutorials/${tutorialId}.json`);

const postRequest = tutorial => axios.post(`${firebaseUrl}/tutorials.json`, tutorial);

const getSingleTutorial = tutorialId => axios.get(`${firebaseUrl}/tutorials/${tutorialId}.json`);

const putRequest = (tutorialId, tutorial) => axios.put(`${firebaseUrl}/tutorials/${tutorialId}.json`, tutorial);

export default {
  getTutorialsData,
  deleteTutorial,
  postRequest,
  getSingleTutorial,
  putRequest,
};
