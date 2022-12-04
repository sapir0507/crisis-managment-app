import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss']
})
export class SideMenuComponent {
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
