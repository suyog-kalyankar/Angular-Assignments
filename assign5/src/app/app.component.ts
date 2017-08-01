import { Component } from '@angular/core';
import { MyServiceService } from './my-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [MyServiceService]
})
export class AppComponent {
 
  constructor(private _MyServiceService: MyServiceService){}
    value = this._MyServiceService.getUser();
}
