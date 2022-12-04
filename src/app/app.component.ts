import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'crisis-managment-app';
  navbar = [{
    path:"/dashboard",
    name: "Dashboard"
  }, 
  {
    path:"/events",
    name: "Events"
  }];

  constructor(private router:Router){}

  NavigateTo(path:string):void{
    this.router.navigate([`${path}`]);
  }

}
