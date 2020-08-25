import { Component, OnInit } from '@angular/core';
import { SettingService } from '../setting.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  delaymin: number = 1;
  delaymax: number = 500;
  delayVal : number = this.delaymin;

  quantitymin: number = 1;
  quantitymax: number = 70;
  quantityVal : number = this.quantitymin;

  constructor(private settingService: SettingService) { }

  ngOnInit(): void {
  }

  btnAddAnimation(){
    document.getElementById("content").style.visibility = "visible";
    document.getElementById("content").style.opacity = "1";
    document.getElementById("content").style.transform = "translate(0, 0)";
  }
  btnAddToggle(){
    this.settingService.setNewAlgo();
  }
}
