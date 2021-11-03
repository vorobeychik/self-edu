import { Colors } from '../enums/enums';

export type User = {
  _id: string,
  id: number,
  login: string,
  name: string,
  avatar_url: string,
  boards: Board[],
};

export type Board = {
  id: string,
  name: string,
  type: string,
  categories: Category[];
};

export type Category = {
  name: string,
  id: string,
  notes: Note[],
};

export type Comments = {
  id: string,
  title: string,
};

export type Tag = {
  title: String,
  color: Colors,
  id: string,
};

export type Property = {
  id: string,
  value: string,
  title: string,
};

export type Note = {
  id: string,
  title: string,
  status: string,
  tags: Tag[],
  properties: Property[],
  comments: Comments[],
};

export type PlaceHolder = {
  categoryId: string,
  index: number,
};

export type Month = {
  name: string,
  days: number[],
}
