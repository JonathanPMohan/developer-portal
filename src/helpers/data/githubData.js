import axios from 'axios';

// const clientId = apiKeys.githubApi.client_id;
// const clientSecret = apiKeys.githubApi.client_secret;

const getUser = token => new Promise((resolve, reject) => {
  axios.get('https://api.github.com/user', { headers: { Authorization: `token ${token}` } })
    .then((res) => {
      const profile = res.data;
      resolve(profile);
    })
    .catch((err) => {
      // {
      //   "login": "JonathanPMohan",
      //   "id": 42167417,
      //   "node_id": "MDQ6VXNlcjQyMTY3NDE3",
      //   "avatar_url": "https://avatars1.githubusercontent.com/u/42167417?v=4",
      //   "gravatar_id": "",
      //   "url": "https://api.github.com/users/JonathanPMohan",
      //   "html_url": "https://github.com/JonathanPMohan",
      //   "followers_url": "https://api.github.com/users/JonathanPMohan/followers",
      //   "following_url": "https://api.github.com/users/JonathanPMohan/following{/other_user}",
      //   "gists_url": "https://api.github.com/users/JonathanPMohan/gists{/gist_id}",
      //   "starred_url": "https://api.github.com/users/JonathanPMohan/starred{/owner}{/repo}",
      //   "subscriptions_url": "https://api.github.com/users/JonathanPMohan/subscriptions",
      //   "organizations_url": "https://api.github.com/users/JonathanPMohan/orgs",
      //   "repos_url": "https://api.github.com/users/JonathanPMohan/repos",
      //   "events_url": "https://api.github.com/users/JonathanPMohan/events{/privacy}",
      //   "received_events_url": "https://api.github.com/users/JonathanPMohan/received_events",
      //   "type": "User",
      //   "site_admin": false,
      //   "name": "Jonathan Mohan",
      //   "company": null,
      //   "blog": "",
      //   "location": null,
      //   "email": null,
      //   "hireable": null,
      //   "bio": "Graphic Designer/Marketing Maven Diving Into The World Of Developing.",
      //   "public_repos": 30,
      //   "public_gists": 0,
      //   "followers": 0,
      //   "following": 0,
      //   "created_at": "2018-08-07T07:02:18Z",
      //   "updated_at": "2019-01-07T07:23:42Z"
      // }
      reject(err);
    });
});

const getUserEvents = (userName, token) => new Promise((resolve, reject) => {
  axios.get(`https://api.github.com/users/${userName}/events/public`, { headers: { Authorization: `token ${token}` } })
    .then((res) => {
      let commitCount = 0;
      const pushEvents = res.data.filter(event => event.type === 'PushEvent');
      pushEvents.forEach((pushEvent) => {
        commitCount += pushEvent.payload.commits.length;
      });
      resolve(commitCount);
    })
    .catch((err) => {
      reject(err);
    });
});

export default {
  getUser,
  getUserEvents,
};
