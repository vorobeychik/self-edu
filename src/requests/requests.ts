import axios from 'axios';

export async function userAuth(code: string){
  console.log(code);
  console.log(location.search.split('=')[1]);
  console.log(process.env.REACT_APP_GIT_HUB_APP_ID, process.env.REACT_APP_GIT_HUB_APP_SECRET);
  const res = await axios.post(
    `https://github.com/login/oauth/access_token?client_id=0cc07a1ee9b85c6d817e&code=${code}&client_secret=2c99a52849e62a4bd9795f6a92f958340f157fb9`,
    

  );
  return res.data;
}