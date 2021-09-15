import { Component, OnInit } from '@angular/core';
import { SortModel } from '../model/sort.model';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  array: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30];

  pink: String = '#ff4081';
  green: String = '#69f0ae';
  yellow: String = '#ffd740';

  searchColor: String;

  posCompare: number = -1;
  numFound: number = -1;
  posFound: number = -1;
  isNotFound: boolean = false;
  isRunning: boolean = false;
  valid: boolean = true;

  searchList: SortModel[] = [
    { id: 1, name: "Linear Search" },
    { id: 2, name: "Binary Search" }
  ];

  target: number;

  constructor() { }

  ngOnInit(): void { }

  onChange(val) {
    if (isNaN(val)) {
      this.valid = false;
    } else {
      this.valid = true;
      this.target = val;
    }
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

  linearSearch = async() => {
    this.isRunning = true;
    this.isNotFound = false;
    this.reset();
    for (let i = 0; i < this.array.length; i++){
      this.posCompare = i;
      this.searchColor = this.color('green');
      await this.sleep(200);
      if (this.array[i] == this.target){
        this.posFound = i;
        this.searchColor = this.color('yellow');
        return this.isRunning = false;
      }
    }
    this.searchColor = this.color('pink');
    this.isNotFound = true;
    await this.sleep(400);
    this.reset();
    this.isRunning = false;
  }

  sleep = (milliseconds) => {
    return new Promise(resolve => setTimeout(resolve, milliseconds));
  }

  reset(){
    this.posCompare = -1;
    this.posFound = -1;
  }

  runSearch(){
    if (this.isTargetInvalid()){
      // this.linearSearch();
      this.binarySearch();
    }
  }

  isTargetInvalid(){
    if (this.target != null) {
      console.log("co gia tri");
      return true;
    } else {
      console.log("hell no!");
      return false;
    }
  }

  left = 0;
  right = this.array.length - 1;

  binarySearch = async() =>{
    this.isRunning = true;
    this.isNotFound = false;
    this.reset();

    this.left = 0;
    this.right = this.array.length - 1;
    let mid = 0;
    while(this.left <= this.right) {
      mid = Math.floor((this.right + this.left +1)/2);
      this.posCompare = mid;
      this.searchColor = this.color('green');
      await this.sleep(700);
      if (this.target == this.array[mid]){
        console.log("pos = " + mid);
        this.posFound = mid;
        this.searchColor = this.color('yellow');
        break;
      } else if (this.target < this.array[mid]) {
        this.right = mid - 1;
      } else if (this.target > this.array[mid]) {
        this.left = mid + 1;
      }
    }
    this.searchColor = this.color('pink');
    this.isNotFound = true;
    await this.sleep(300);
    this.reset();
    this.isRunning = false;
  }
}
