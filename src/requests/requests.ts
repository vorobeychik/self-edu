import axios from 'axios';

export async function userAuth(){
  console.log(location.search.split('=')[1]);
  console.log(process.env.REACT_APP_GIT_HUB_APP_ID, process.env.REACT_APP_GIT_HUB_APP_SECRET);
  const res = await axios.get(
    'http://localhost:4000/api/user',
    {
      withCredentials: true,
    },
  );
  return res.data;
}