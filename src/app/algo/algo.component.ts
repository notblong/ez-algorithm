import { Component, OnInit } from '@angular/core';
import { element } from 'protractor';

@Component({
  selector: 'app-algo',
  templateUrl: './algo.component.html',
  styleUrls: ['./algo.component.scss']
})
export class AlgoComponent implements OnInit {

  array : number[] = [100, 300, 234, 453, 123, 80, 222, 341, 113];

  constructor() { }

  ngOnInit(): void {
    // this.array = [100, 200];
  }

  sort(){
    for(var i = 0; i < this.array.length; i++) {
      for(var j = i+1; j < this.array.length; j++) {
        if(this.array[i] > this.array[j]) {
          // this.swap(this.array[i], this.array[j]);
          var temp = this.array[i];
          this.array[i] = this.array[j];
          this.array[j] = temp;
        }
      }
    }
  }

  swap(num1, num2) {
    var temp = num1;
    num1 = num2;
    num2 = temp;
  }


}
