import {Component} from 'angular2/core';

import {CoursesComponent} from './courses.component';

@Component({
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
    <courses></courses>
  `,
  directives: [CoursesComponent]
})
export class AppComponent{
  title = "Angular 2 Seed Project";

}
