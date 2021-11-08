import axios, { AxiosResponse } from 'axios';
import { Board, User } from '../types/types';
import { developmentMode, devServerUrl, prodServerUrl } from '../constants/const';

interface UpdateBoardBody{ board: Board }
interface CreateBoardBody{ board: Board, userId: string }
interface DeleteBoardBody{ userId: string, boardId: string }

const serverUrl = process.env.NODE_ENV === developmentMode ? devServerUrl : prodServerUrl;

export async function userAuth(): Promise<User | null> {
  try {
    const res = await axios.get(
      `${serverUrl}/user`,
      {
        withCredentials: true,
      },
    );
    return res.data;
  } catch (error) {
    return null;
  }
}

export async function createBoard(board: Board, userId: string): Promise<Board | null> {
  try {
    const response = await axios.post<CreateBoardBody, AxiosResponse<Board>>(
      `${serverUrl}/board/create`,
      {
        userId,
        board,
      },
    );

    return response.data;
  } catch (error) {
    return null;
  }
}

export async function updateBoard(board: Board): Promise<string | null> {
  try {
    const response = await axios.post<UpdateBoardBody, AxiosResponse<string>>(
      `${serverUrl}/board/update`,
      {
        board,
      },
    );

    return response.data;
  } catch (error) {
    return null;
  }
}

export async function deleteBoard(userId: string, boardId: string): Promise<string | null> {
  try {
    const response = await axios.post<DeleteBoardBody, AxiosResponse<string>>(
      `${serverUrl}/board/delete`,
      {
        boardId,
        userId,
      },
    );

    return response.data;
  } catch (error) {
    return null;
  }
}
