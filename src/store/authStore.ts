import { makeAutoObservable } from 'mobx';

export class Auth{

  isAuth = false;

  constructor() {
    makeAutoObservable(this);
  }

  setAuth( value:boolean ){
    this.isAuth = value;
  }
}

