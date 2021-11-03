import axios, { AxiosResponse } from 'axios';
import { Board, User } from '../types/types';
import {devServerUrl, prodServerUrl} from "../constants/const";


const serverUrl = process.env.NODE_ENV === 'development' ? devServerUrl : prodServerUrl;

export async function userAuth():Promise<User> {
  const res = await axios.get(
    `${serverUrl}/user`,
    {
      withCredentials: true,
    },
  );
  return res.data;
}

export async function createBoard(board:Board, userId:string):Promise<Board> {
  const response = await axios.post<{ board: Board, userId: string }, AxiosResponse<Board>>(
    `${serverUrl}/board/create`,
    {
      userId,
      board,
    },
  );

  return response.data;
}

export async function updateBoard(board: Board) {
  const response = await axios.post<{ board: Board }, AxiosResponse<Board>>(
    `${serverUrl}/board/update`,
    {
      board,
    },
  );

  return response.data;
}

export async function deleteBoard(userId: string, boardId: string) {
  const response = await axios.post<{ userId: string, boardId: string }, AxiosResponse<Board>>(
    `${serverUrl}/board/delete`,
    {
      boardId,
      userId,
    },
  );

  return response.data;
}
