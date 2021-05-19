import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms' // added
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'; // http
import { NgProgressModule } from '@ngx-progressbar/core'; //loader
import { NgProgressHttpClientModule } from '@ngx-progressbar/http-client'; // loader


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GoalComponent } from './goal/goal.component';
import { GoalDetailComponent } from './goal-detail/goal-detail.component';
import { StrikethroughDirective } from './strikethrough.directive';
import { DateCountPipe } from './date-count.pipe';
import { GoalFormComponent } from './goal-form/goal-form.component';
import { AboutComponent } from './about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    GoalComponent,
    GoalDetailComponent,
    StrikethroughDirective,
    DateCountPipe,
    GoalFormComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, // added
    HttpClientModule, 
    NgProgressModule.forRoot(), // loader
    NgProgressHttpClientModule, // loader
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


