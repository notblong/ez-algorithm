import { Component, OnInit } from '@angular/core';
import { SettingService } from '../setting.service';

@Component({
  selector: 'app-algo',
  templateUrl: './algo.component.html',
  styleUrls: ['./algo.component.scss']
})
export class AlgoComponent implements OnInit {

  array: number[] = [0];
  sortColor: String;

  num1: number = 0;
  num2: number = 0;

  delayAmount: number;
  
  
  constructor(
    private settingService: SettingService
  ) { }

  ngOnInit(): void {
    this.array = this.createRandomArray(100, 350, 50, this.array);
    this.sortColor = this.color(0);
  }

  
  // delayAmount: number = 1;

  selectionSort = async () => {
    for (var i = 0; i < this.array.length; i++) {
      this.num1 = this.array[i];
      this.sortColor = this.color(1);
      for (var j = i + 1; j < this.array.length; j++) {
        this.num2 = this.array[j];
        this.sortColor = this.color(1);
        await this.sleep(this.delayAmount = this.settingService.speedVal);
        if (this.array[i] > this.array[j]) {

          var temp = this.array[i];
          this.array[i] = this.array[j];
          this.array[j] = temp;

          this.num1 = this.array[i];
          this.num2 = this.array[j];

          this.sortColor = this.color(2);

          await this.sleep(this.delayAmount);
        }
      }
    }
    this.sortColor = this.color(0);
  }

  sleep = (milliseconds) => {
    return new Promise(resolve => setTimeout(resolve, milliseconds));
  }

  color(number) {
    switch(number){
      case 0: return '#ff4081'; // normal -> pink
      case 1: return '#69f0ae'; // compare -> green
      case 2: return '#ffd740'; // swap -> yellow
      default: return null;
    }
  }

  randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  createRandomArray(min, max, quantity, array){
    for (let i = 0; i <= quantity; i++){
      array[i] = this.randomNumber(min, max);
    }
    return array;
  }

  reCreateArray(){
    this.createRandomArray(100, 350, 60, this.array);
  }
}
