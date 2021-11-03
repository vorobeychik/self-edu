import { Colors } from '../enums/enums';
import { Month } from "../types/types";
import {createMonth} from "../utils/utils";

export const colors:Colors[] = [
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

export const year:Month[] = [
    createMonth('January',31),
    createMonth('February',29),
    createMonth('March',31),
    createMonth('April',30),
    createMonth('May',31),
    createMonth('June',30),
    createMonth('July',31),
    createMonth('August',31),
    createMonth('September',30),
    createMonth('October',31),
    createMonth('November',30),
    createMonth('December',31),
]


export const authUrl = `https://github.com/login/oauth/authorize?client_id=${process.env.REACT_APP_GIT_HUB_APP_ID}&scope=user&redirect_uri=http://localhost:4000/api/user/auth`;
export const phoneCheckRegExp = /Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i;
