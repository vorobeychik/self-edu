import axios from 'axios';

export async function userAuth(){

  const res = await axios.get(
    'http://localhost:4000/api/user',
    {
      withCredentials: true,
    },
  );
  return res.data;
}