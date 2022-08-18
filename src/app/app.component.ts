import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  title = 'angular client UI';


  constructor() {
    this.title = 'Spring Boot2.6.7 ---- Angular14 Application';
  }

}
