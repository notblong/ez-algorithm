import { Component, OnInit } from '@angular/core';
import { SortModel } from '../model/sort.model';
import { CustomArray } from '../model/custom-array.model';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  array: number[] = [0];

  pink: String = '#ff4081';
  green: String = '#69f0ae';
  yellow: String = '#ffd740';

  searchColor: String;

  posCompare: number = -1;
  numFound: number = -1;
  posFound: number = -1;
  isNotFound: boolean = false;
  isRunning: boolean = false;

  searchList: SortModel[] = [
    { id: 1, name: "Linear Search" },
    { id: 2, name: "Binary Search" }
  ];

  constructor() { }

  ngOnInit(): void {
    this.createArray();
  }

  color(nameOfColor) {
    switch (nameOfColor) {
      case 'pink': return this.pink;   // normal
      case 'green': return this.green;  // compare
      case 'yellow': return this.yellow; // found
      case 'red': return "red";       // not found.
      default: return null;
    }
  }

  choosingSearch() {

  }

  generateRandomArray(min, max, quantity) {
    // if (this.array.length > quantity) {
    //   this.array = [];
    // }
    for (let i = 0; i < quantity; i++) {
      this.array[i] = this.randomNumber(min, max);
    }
    return this.array;
  }

  randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  createArray() {
    this.reset();
    this.generateRandomArray(0, 25, 15);
  }

  sleep = (milliseconds) => {
    return new Promise(resolve => setTimeout(resolve, milliseconds));
  }

  linearSearch = async() => {
    let target = 10;
    this.isRunning = true;
    this.isNotFound = false; 
    for (let i = 0; i < this.array.length; i++){
      this.posCompare = i;
      this.searchColor = this.color('green');
      await this.sleep(200);
      if (this.array[i] == target){
        this.posFound = i;
        this.searchColor = this.color('yellow');
        return this.isRunning = false;
      }
    }
    this.searchColor = this.color('pink');
    this.isNotFound = true;
    await this.sleep(300);
    this.reset();
    this.isRunning = false;
  }

  reset(){
    this.posCompare = -1;
    this.posFound = -1;
  }
}
