import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-action-bar',
  templateUrl: './action-bar.component.html',
  styleUrls: ['./action-bar.component.css']
})
export class ActionBarComponent implements OnInit {

  counter:number = 0;
  @Input() step:number = 1;
  @Output() numberChange = new EventEmitter();

  constructor() {  }

  ngOnInit(): void {
  }

  decrease(){
    // console.log('hey');
    if(this.counter-this.step>0){
      this.counter = this.counter-this.step;
      this,this.numberChange.emit();
    }

  }

  increase(){ 
    if(this.counter+this.step<110){
      this.counter = this.counter+this.step;
      this,this.numberChange.emit();
    }

  }


}
