import { Injectable } from '@angular/core';
import { AlgoComponent } from 'src/app/algo/algo.component';

@Injectable({
  providedIn: 'root'
})
export class SortService {

  pink: String ='#ff4081';
  green: String = '#69f0ae';
  yellow: String = '#ffd740';

  isSorting: boolean = false;
  array: number[] = [0];
  sortColor: String;

  numCompare1: number = 0;
  numCompare2: number = 0;

  delayVal: number;

  constructor() { }

  sleep = (milliseconds) => {
    return new Promise(resolve => setTimeout(resolve, milliseconds));
  }

  color(caseNumber) {
    switch(caseNumber){
      case 0: return this.pink;   // normal
      case 1: return this.green;  // compare
      case 2: return this.yellow; // swap
      default: return null;
    }
  }

  selectionSort = async () => {
    this.isSorting = true;
    for (var i = 0; i < this.array.length; i++) {
      this.numCompare1 = this.array[i];
      this.sortColor = this.color(1);
      for (var j = i + 1; j < this.array.length; j++) {
        this.numCompare2 = this.array[j];
        this.sortColor = this.color(1);
        await this.sleep(this.delayVal);
        if (this.array[i] > this.array[j]) {

          var temp = this.array[i];
          this.array[i] = this.array[j];
          this.array[j] = temp;

          this.numCompare1 = this.array[i];
          this.numCompare2 = this.array[j];

          this.sortColor = this.color(2);

          await this.sleep(this.delayVal);
        }
      }
    }
    this.sortColor = this.color(0);
    this.isSorting = false;
  }



}
