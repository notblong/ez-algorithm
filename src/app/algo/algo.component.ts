import { Component, OnInit } from '@angular/core';
import { SettingService } from '../setting.service';
import { SortModel } from '../model/sort.model';

@Component({
  selector: 'app-algo',
  templateUrl: './algo.component.html',
  styleUrls: ['./algo.component.scss']
})
export class AlgoComponent implements OnInit {
  static MIN_ELE = 10;
  static MAX_ELE = 350; 

  array: number[] = [0];
  sortColor: String;

  numCompare1: number = 0;
  numCompare2: number = 0;

  delayAmount: number;

  delaymin: number = 1;
  delaymax: number = 500;
  delayVal : number = this.delaymin;

  quantitymin: number = 3;
  quantitymax: number = 70;
  quantityVal : number = this.quantitymin;
  
  sortList: SortModel[] = [
    {id: 1, name:"Selection"},
    {id: 2, name:"Bubble"},
    {id: 3, name:"Heap"}
  ];

  isRunning: boolean = false;
  
  constructor(
    private settingService: SettingService
  ) { }

  ngOnInit(): void {
    this.setHeightCssForArray()
    this.createArray();
    this.sortColor = this.color(0);
  }

  
  selectionSort = async () => {
    this.isRunning = true;
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
    this.isRunning = false;
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

  generateRandomArray(min, max, quantity){
    if (this.array.length > quantity){
      this.array = [0];
    }
    for (let i = 0; i < quantity; i++){
      this.array[i] = this.randomNumber(min, max);
    }
    return this.array;
  }

  createArray(){
    this.generateRandomArray(AlgoComponent.MIN_ELE, AlgoComponent.MAX_ELE, this.quantityVal);
  }

  setDelayValue(event) {
    this.delayVal = event.value;
  }
  setQuantityValue(event) {
    this.quantityVal = event.value;
    this.createArray();
  }

  setHeightCssForArray(){
    document.getElementById("array").style.height = AlgoComponent.MAX_ELE + "px";
  }

}
