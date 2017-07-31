import { Component, OnInit , Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-user-component',
  templateUrl: './user-component.component.html',
  styleUrls: ['./user-component.component.css']
})
export class UserComponentComponent implements OnInit {

  constructor() { }
 @Input('user') 
  users : Array<String>;

  @Output('displayAlertMsg')
  displayAlertMsg = new EventEmitter<String>();
  ngOnInit() {
  }

  childMsg = "This is USER component! [ Child of ROOT ]"

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

  getMsg = "Wowwww it works !!!!";

  showAlertMsg(){
    this.displayAlertMsg.emit("This is alert message passed from child component i.e user to parent component");
  }

}
