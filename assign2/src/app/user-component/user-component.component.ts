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

   childMsg = "This is USER component![ Child of ROOT]"
}
