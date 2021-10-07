import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // title = 'firstAngular';
  // bsk = "fluke";

  // clickme(){
  //   console.log("hello : ", this.title);
  // }

  value = 0;
  calBuffet(value: String){
    const price = Number(value);
    this.value = (price*3)/4;
  }


  testEventClick(){
    console.log("testEventClick");
  }

  testNumberChange(){
    console.log("testNumberChange");
  }
}
