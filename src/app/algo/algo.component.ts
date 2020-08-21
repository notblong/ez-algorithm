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

  constructor() { }

  ngOnInit(): void {
    // this.array = [100, 200];
  }

  num1: number = 0;
  num2: number = 0;

  selectionSort() {
    this.sort;
  }

  sort = async () => {
    for (var i = 0; i < this.array.length; i++) {
      this.num1 = this.array[i];
      for (var j = i + 1; j < this.array.length; j++) {
        this.num2 = this.array[j];
        await this.sleep(500);
        if (this.array[i] > this.array[j]) {
          var temp = this.array[i];
          this.array[i] = this.array[j];
          this.array[j] = temp;
          this.num1 = this.array[i];
          this.num2 = this.array[j];

        }

      }
    }
  }

  sleep = (milliseconds) => {
    return new Promise(resolve => setTimeout(resolve, milliseconds));
  }

  swap(num1, num2) {
    var temp = num1;
    num1 = num2;
    num2 = temp;
  }


}
