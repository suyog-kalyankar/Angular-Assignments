import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Welcome to angular-2 app!';
  userData = ["suyog","manoj","ninad","shashank","rushi","govind"];


  showMsg(msg :String){
    alert(msg);
  }

}