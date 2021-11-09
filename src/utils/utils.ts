import { v4 as uuidv4 } from 'uuid';
import {
  Board, Category, Comments, Month, Note, PlaceHolder, Property, Tag, Year,
} from '../types/types';
import {
  colors, emptyTitle, noTitle, phoneCheckRegExp, propertyTitle, year,
} from '../constants/const';
import { Colors, ProgressStatus } from '../enums/enums';

export function getRandomNumber(max: number): number {
  return Math.round(Math.random() * max);
}

export function getRandomColor(): Colors {
  const randomNumber = getRandomNumber(colors.length - 1);
  return colors[randomNumber];
}

export function createNoteTemplate(status: string, title?: string): Note {
  return {
    title: title ?? noTitle,
    id: uuidv4(),
    status,
    comments: [],
    tags: [],
    properties: [],
  };
}

export function createNumberArray(num: number): number[] {
  return new Array(num).fill(0).map((el, index) => index + 1);
}

export function createMonth(name: string, daysAmount: number): Month {
  return {
    name,
    days: createNumberArray(daysAmount),
  };
}

export function createYear(yearName: number): Year {
  return {
    name: yearName,
    months: year,
  };
}

export function createCalendarData(): Year[] {
  const data = [];
  const year = getYear();
  for (let index = year; index < year + 10; index += 1) {
    data.push(createYear(index));
  }
  return data;
}

export function createPropertyTemplate(): Property {
  return {
    id: uuidv4(),
    value: emptyTitle,
    title: propertyTitle,
  };
}

export function getYear(): number {
  const date = new Date();
  return date.getFullYear();
}

export function getMonth(): number {
  const date = new Date();
  return date.getMonth();
}

export function isUserUsePhone(): boolean {
  return phoneCheckRegExp.test(navigator.userAgent);
}

export function createCategoryTemplate(title?: string): Category {
  return {
    name: title ?? noTitle,
    id: uuidv4(),
    notes: [],
  };
}

export function createComment(title: string): Comments {
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
    categories: [
      createCategoryTemplate(ProgressStatus.ToDo),
      createCategoryTemplate(ProgressStatus.InProgress),
      createCategoryTemplate(ProgressStatus.Done),
    ],
  };
}

export function createPlaceHolders(amount: number, categoryId: string): PlaceHolder[] {
  const placeHolders: PlaceHolder[] = [];
  for (let i = 0; i < amount + 1; i += 1) {
    placeHolders.push({
      index: i,
      categoryId,
    });
  }
  return placeHolders;
}

export function deleteAllCookies(): void {
  const cookies = document.cookie.split(';');

  for (let i = 0; i < cookies.length; i += 1) {
    const cookie = cookies[i];
    const eqPos = cookie.indexOf('=');
    const name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
    document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 GMT`;
  }
}

export function insert(arr: any[], index: number, element: any): any[] {
  if (index === 0) {
    return [element, ...arr];
  } if (index === arr.length) {
    return [...arr, element];
  }
  return [...arr.slice(0, index), element, ...arr.slice(index)];
}
