import { Component, OnInit } from '@angular/core';
import  { Goal } from '../goal'; // imported goal

@Component({
  selector: 'app-goal-form',
  templateUrl: './goal-form.component.html',
  styleUrls: ['./goal-form.component.css']
})
export class GoalFormComponent implements OnInit {

  newGoal = new Goal(0, '', '', new Date()) // created a new goal object entry

  constructor() { }

  ngOnInit(): void {
  }

}
