import { Injectable } from '@angular/core';

@Injectable()
export class MyServiceService {

  users;
  constructor() { }

  getUser() : String[] {
  this.users = ["suyog", "Ninad", "Rushi", "Manoj", "Shashank"];
  return this.users;
  }
}
