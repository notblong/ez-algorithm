import { Component, OnInit, AfterViewInit, AfterContentChecked } from '@angular/core';
import { SortModel } from '../model/sort.model';
import { SortService } from '../service/sort-service/sort.service';
import { async } from '@angular/core/testing';

@Component({
  selector: 'app-algo',
  templateUrl: './algo.component.html',
  styleUrls: ['./algo.component.scss']
})
export class AlgoComponent implements OnInit, AfterViewInit {
  static MIN_ELE = 10;
  static MAX_ELE = 350;

  pink: String = '#ff4081';
  green: String = '#69f0ae';
  yellow: String = '#ffd740';

  array: number[] = [0];
  sortColor: String;

  numCompare1: number = 0;
  numCompare2: number = 0;

  delayAmount: number;

  delaymin: number = 1;
  delaymax: number = 500;
  delayVal: number = this.delaymin;

  quantitymin: number = 3;
  quantitymax: number = 70;
  quantityVal: number = this.quantitymin;

  selectedSortId: number;

  sortList: SortModel[] = [
    { id: 1, name: "Selection" },
    { id: 2, name: "Bubble" },
    { id: 3, name: "Heap" }
  ];


  isRunning: boolean = false;
  isSearchMode: boolean = true;

  constructor(
    private sortService: SortService
  ) { }
  ngAfterViewInit(): void {
    this.btnAddAnimation();
  }

  ngOnInit(): void {
    this.setHeightCssForArray()
    this.createArray();
    // this.sortColor = this.color(0);
  }

  setDelayValue(event) {
    this.delayVal = event.value;
  }
  setQuantityValue(event) {
    this.quantityVal = event.value;
    this.createArray();
  }

  setHeightCssForArray() {
    document.getElementById("array").style.height = AlgoComponent.MAX_ELE + "px";
  }

  randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  generateRandomArray(min, max, quantity) {
    if (this.array.length > quantity) {
      this.array = [0];
    }
    for (let i = 0; i < quantity; i++) {
      this.array[i] = this.randomNumber(min, max);
    }
    return this.array;
  }

  createArray() {
    this.generateRandomArray(AlgoComponent.MIN_ELE, AlgoComponent.MAX_ELE, this.quantityVal);
  }

  color(caseNumber) {
    switch (caseNumber) {
      case 0: return this.pink;   // normal
      case 1: return this.green;  // compare
      case 2: return this.yellow; // swap
      default: return null;
    }
  }

  sleep = (milliseconds) => {
    return new Promise(resolve => setTimeout(resolve, milliseconds));
  }

  selectionSort = async () => {
    this.isRunning = true;
    for (let i = 0; i < this.array.length; i++) {
      this.numCompare1 = this.array[i];
      this.sortColor = this.color(1);
      for (let j = i + 1; j < this.array.length; j++) {
        this.numCompare2 = this.array[j];
        this.sortColor = this.color(1);
        await this.sleep(this.delayVal);
        if (this.array[i] > this.array[j]) {

          let temp = this.array[i];
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

  bubbleSort = async () => {
    this.isRunning = true;
    let size = this.array.length;
    for (let i = 0; i < this.array.length; i++) {

      for (let j = 0; j < size - 1; j++) {
        this.numCompare1 = this.array[j];
        this.numCompare2 = this.array[j+1];
        this.sortColor = this.color(1);
        await this.sleep(this.delayVal);
        if (this.array[j] > this.array[j+1]){
          let temp = this.array[j];
          this.array[j] = this.array[j+1];
          this.array[j+1] = temp;

          this.sortColor = this.color(2);
          await this.sleep(this.delayVal);
        }
      }
      size--;
    }
    this.sortColor = this.color(0);
    this.isRunning = false;
  }

  heapSort() {

  }

  choosingSort() {
    if (this.selectedSortId == 1) {
      this.selectionSort();
    } else if (this.selectedSortId == 2) {
      this.bubbleSort();
    } else if (this.selectedSortId == 3) {
      this.heapSort();
    }
  }

  btnAddAnimation(){
    document.getElementById("content").style.visibility = "visible";
    document.getElementById("content").style.opacity = "1";
    document.getElementById("content").style.transform = "translate(0, 0)";
  }

}
