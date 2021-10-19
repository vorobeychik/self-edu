import { Auth } from './authStore';
import { makeAutoObservable } from 'mobx';

class Store{

  auth;

  constructor() {
    makeAutoObservable(this);
    this.auth = new Auth();
  }
}

export const store = new Store();