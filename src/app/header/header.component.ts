import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  btnAddAnimation(){
    document.getElementById("content").style.visibility = "visible";
    document.getElementById("content").style.opacity = "1";
    document.getElementById("content").style.transform = "translate(0, 0)";
  }
}
