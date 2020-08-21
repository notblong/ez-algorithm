import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-algo',
  templateUrl: './algo.component.html',
  styleUrls: ['./algo.component.scss']
})
export class AlgoComponent implements OnInit {

  array: number[];


  constructor() { }

  ngOnInit(): void {
    this.array = [100, 200];
  }

}
