import { Injectable } from '@angular/core';
import { Goals } from '../goalList';

// makes it universial
@Injectable({
  providedIn: 'root' // has root meaning can be used thoughou the application any component
})
export class GoalService {

  constructor() { }

  getGoals(){
    return Goals;
  }
}
