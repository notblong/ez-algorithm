import { Component, OnInit } from '@angular/core';
import { element } from 'protractor';
import { resolve } from 'dns';

@Component({
  selector: 'app-algo',
  templateUrl: './algo.component.html',
  styleUrls: ['./algo.component.scss']
})
export class AlgoComponent implements OnInit {

  array: number[] = [100, 300, 234, 453, 123, 80, 222, 341, 113];
  sortColor: String;

  num1: number = 0;
  num2: number = 0;

  constructor() { }

  ngOnInit(): void {
    this.sortColor = this.color(0);
  }


  selectionSort() {
    this.sort;
    
  }

  sort = async () => {
    for (var i = 0; i < this.array.length; i++) {
      this.num1 = this.array[i];
      this.sortColor = this.color(1);
      for (var j = i + 1; j < this.array.length; j++) {
        this.num2 = this.array[j];
        this.sortColor = this.color(1);
        await this.sleep(500);
        if (this.array[i] > this.array[j]) {

          var temp = this.array[i];
          this.array[i] = this.array[j];
          this.array[j] = temp;

          this.num1 = this.array[i];
          this.num2 = this.array[j];

          this.sortColor = this.color(2);

          await this.sleep(400);
        }

      }
    }
    this.sortColor = this.color(0);
  }

  sleep = (milliseconds) => {
    return new Promise(resolve => setTimeout(resolve, milliseconds));
  }

  swap(num1, num2) {
    var temp = num1;
    num1 = num2;
    num2 = temp;
  }

  color(number) {
    switch(number){
      case 0: return '#ff4081';
      case 1: return '#69f0ae';
      case 2: return '#ffd740';
      default: return null;
    }
  }


}
