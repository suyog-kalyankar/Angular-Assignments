import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-component',
  templateUrl: './user-component.component.html',
  styleUrls: ['./user-component.component.css']
})
export class UserComponentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  childMsg = "This is USER component [Child of Root]";
  index = 1;
  users = ["suyog", "ninad", "swati", "rushi", "smita", "manoj"];
  checkingCon = false;
  color;
  setColor(color: string) {
    this.color = color;
  }
  changeColor() {
    if (this.checkingCon) {
      this.checkingCon = false;
    }
    else {
      this.checkingCon = true;
    }
    return this.checkingCon;
  }

  getMsg = "Wowwww it works !!!!"
}
