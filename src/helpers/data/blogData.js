import axios from 'axios';
import apiKeys from '../apiKeys';

const firebaseUrl = apiKeys.firebaseConfig.databaseURL;

const getBlogsData = () => new Promise((resolve, reject) => {
  axios
    .get(`${firebaseUrl}/blogs.json`)
    .then((res) => {
      const blogsArray = [];
      if (res.dadta !== null) {
        Object.keys(res.data).forEach((key) => {
          res.data[key].id = key;
          blogsArray.push(res.data[key]);
        });
      }
      console.log(blogsArray);
      resolve(blogsArray);
    })
    .catch(err => reject(err));
});

export default { getBlogsData };
