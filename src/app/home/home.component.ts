import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  title:string = 'welcome 4se5';
  color:string="red";
  color1:string="" //ki tekteb zda talkah la couleur fl web

  msg(){
    alert('hello')
    console.log('hello')
  }

}
