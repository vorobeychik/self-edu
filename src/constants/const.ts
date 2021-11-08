import { Colors, Months } from '../enums/enums';
import { Month, User } from '../types/types';
import { createMonth } from '../utils/utils';

export const colors: Colors[] = [
  Colors.Purple,
  Colors.Blue,
  Colors.Green,
  Colors.Gray,
  Colors.Brown,
  Colors.Pink,
  Colors.LightGray,
  Colors.Orange,
  Colors.Red,
  Colors.Yellow];

export const devServerUrl = 'http://localhost:4000/api';
export const prodServerUrl = 'https://zealous-khorana-1befb7.netlify.app';
export const developmentMode ='development';

export const year: Month[] = [
  createMonth(Months.January, 31),
  createMonth(Months.February, 29),
  createMonth(Months.March, 31),
  createMonth(Months.April, 30),
  createMonth(Months.May, 31),
  createMonth(Months.June, 30),
  createMonth(Months.July, 31),
  createMonth(Months.August, 31),
  createMonth(Months.September, 30),
  createMonth(Months.October, 31),
  createMonth(Months.November, 30),
  createMonth(Months.December, 31),
];

export const initialState: User = {
  _id: '',
  boards: [{
    id: '', name: '', categories: [],
  }],
  login: '',
  id: 0,
  avatar_url: '',
  name: '',
};

export const enterKey = 'Enter';
export const emptyTitle = 'Empty';

export const commonIconSize = 16;
export const mediumIconSize = 14;
export const smallIconSize = 11;
export const bigIconSize = 26;
export const largeIconSize = 30;
export const avatarIconSize = 70;

export const standardPath = '/';

export const propertyTitle = 'Property';
export const noTitle = 'No title';

export const authUrl = `https://github.com/login/oauth/authorize?client_id=${process.env.REACT_APP_GIT_HUB_APP_ID}&scope=user&redirect_uri=http://localhost:4000/api/user/auth`;
export const phoneCheckRegExp = /Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i;
