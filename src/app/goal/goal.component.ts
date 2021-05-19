// this is parent to goal-detail.component
import { Component, OnInit } from '@angular/core';
import { Goal } from '../goal';
import { GoalService } from '../goal-service/goal.service' // import service 
import { AlertService } from '../alert-service/alert.service' //alert
import { QuoteRequestService } from '../guote-request/quote-resquest.service'

import { Quote } from '../quote-class/quote';

@Component({
  selector: 'app-goal',
  templateUrl: './goal.component.html',
  styleUrls: ['./goal.component.css']
})
export class GoalComponent implements OnInit {

  goals:Goal[];
  alertService:AlertService;
  quote!:Quote;
  
  constructor(goalService:GoalService, alertService:AlertService, private quoteService:QuoteRequestService) {
    this.goals = goalService.getGoals()
    this.alertService = alertService;
  }

   ngOnInit() {

    this.quoteService.quoteRequest()
    this.quote = this.quoteService.quote
  }

  toggleDetails(index:number){ // specify the type of index
    this.goals[index].showDescription = !this.goals[index].showDescription;
  }

  completeGoal(isComplete:boolean, index:number){
    if (isComplete) {
      this.goals.splice(index,1);
    }
  }
  deleteGoal(isComplete:boolean, index:number){
    if (isComplete){
      let toDele = confirm(`Are you sure you want to delete ${this.goals[index].name}`);
      if (toDele){
        this.goals.splice(index,1)
        this.alertService.alertMe("The goal has been deleted")
      }
    }
  }
  addNewGoal(goal:any){
    let goalLength = this.goals.length;
    goal.id = goalLength+1;
    goal.completeDate = new Date(goal.completeDate)
    this.goals.push(goal);
  }
}
