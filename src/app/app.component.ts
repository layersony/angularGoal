import { Component } from '@angular/core';
 // imported the class Goal from goal.ts

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Goals';
  // goals: string[]; // this is an array string (this being the object) type

  // constructor(){
  //   this.goals = ['Watch finsing nemo', 'Buy cookies', 'get new phone case']
  // }


}
