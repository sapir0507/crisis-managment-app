import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-my-button',
  templateUrl: './my-button.component.html',
  styleUrls: ['./my-button.component.scss']
})
export class MyButtonComponent {
  @Input() path!: String;
  @Input() name!: String;

  constructor(private router:Router){}

  NavigateTo():void{
    this.router.navigate([`${this.path}`]);
  }
}
