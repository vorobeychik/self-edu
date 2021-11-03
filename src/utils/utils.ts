import { v4 as uuidv4 } from 'uuid';
import {
  Board, Category, Comments, Month, Note, PlaceHolder, Property, Tag,
} from '../types/types';
import {colors, phoneCheckRegExp, year} from '../constants/const';

export function copyObject(object: object) {
  return JSON.parse(JSON.stringify(object));
}

export function getRandomNumber(max:number) {
  return Math.round(Math.random() * max);
}

export function getRandomColor() {
  const randomNum = getRandomNumber(colors.length - 1);
  return colors[randomNum];
}

export function createNoteTemplate(status: string, title?:string):Note {
  return {
    title: title ?? 'Untilted',
    id: uuidv4(),
    status,
    comments: [],
    tags: [],
    properties: [],
  };
}

export const  createNumArray = (num:Number) => new Array(num).fill(0).map((el,index) => index + 1 );


export function createMonth(name: string, daysAmount: number):Month{
  return {
    name,
    days: createNumArray(daysAmount),
  }
}

export function createYear(yearName: number){
  return {
    name: yearName,
    months: year,
  }
}

export function createCalendarData(){
  const data = [];
  const year = getYear();
  for (let index = year; index < year + 10 ; index += 1){
    data.push(createYear(index))
  }
  console.log(data)
  return data;
}

export function createPropertyTemplate():Property {
  return {
    id: uuidv4(),
    value: 'Empty',
    title: 'Property',
  };
}

export function getYear(){
  const date = new Date();
  return date.getFullYear();
}

export function getMonth(){
  const date = new Date();
  return date.getMonth();
}

export function isUserUsePhone() {
  return phoneCheckRegExp.test(navigator.userAgent);
}

export function createCategoryTemplate(title?:string):Category {
  return {
    name: title ?? 'Untilted',
    id: uuidv4(),
    notes: [],
  };
}

export function createComment(title: string):Comments {
  return {
    id: uuidv4(),
    title,
  };
}

export function createTagTemplate(title: string): Tag {
  return {
    id: uuidv4(),
    title,
    color: getRandomColor(),
  };
}

export function createBoardTemplate(tittle: string): Board {
  return {
    id: uuidv4(),
    name: tittle,
    type: 'Board',
    categories: [
      createCategoryTemplate('To Do'),
      createCategoryTemplate('In progress'),
      createCategoryTemplate('Done'),
    ],
  };
}

export function createPlaceHolders(amount: number, categoryId: string) {
  const placeHolders: PlaceHolder[] = [];
  for (let i = 0; i < amount + 1; i += 1) {
    placeHolders.push({
      index: i,
      categoryId,
    });
  }
  return placeHolders;
}

export function deleteAllCookies() {
  const cookies = document.cookie.split(';');

  for (let i = 0; i < cookies.length; i += 1) {
    const cookie = cookies[i];
    const eqPos = cookie.indexOf('=');
    const name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
    document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 GMT`;
  }
}

export function insert(arr: any[], index: number, element: any) {
  if (index === 0) {
    return [element, ...arr];
  } if (index === arr.length) {
    return [...arr, element];
  }
  return [...arr.slice(0, index), element, ...arr.slice(index)];
}
