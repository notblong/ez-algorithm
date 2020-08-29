import { Component, OnInit } from '@angular/core';
import { SortModel } from '../model/sort.model';
import { async } from '@angular/core/testing';
import { stringify } from 'querystring';

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

  numCompare: number;
  numFound: number;
  posFound: number;
  isFound: boolean;

  searchList: SortModel[] = [
    { id: 1, name: "Linear Search" },
    { id: 2, name: "Binary Search" }
  ];

  constructor() { }

  ngOnInit(): void {
    this.createArray();
  }

  color(caseNumber) {
    switch (caseNumber) {
      case 0: return this.pink;   // normal
      case 1: return this.green;  // compare
      case 2: return this.yellow; // found
      case 3: return "red";       // not found.
      default: return null;
    }
  }

  choosingSearch() {

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
    this.generateRandomArray(0, 99, 15);
  }

  sleep = (milliseconds) => {
    return new Promise(resolve => setTimeout(resolve, milliseconds));
  }

  linearSearch = async() => {
    let target = 10;
    this.posFound = 0;
    for (let i = 0; i < this.array.length; i++){
      this.numCompare = this.array[i];
      this.searchColor = this.color(1);
      await this.sleep(200);
      if (this.array[i] == target){
        this.isFound = true;
        this.numFound = this.array[i];
        this.posFound = this.array[i];
        this.searchColor = this.color(2);
        return 0;
      }
    }
    this.searchColor = this.color(0);
    this.notFound();
    await this.sleep(300);
    this.posFound = 0;
  }

  notFound() {
    this.posFound = -1;
    this.isFound = false;
  }


  

}
