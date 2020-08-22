import { Component, OnInit } from '@angular/core';
import { SettingService } from '../setting.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  speedmin: number = 1;
  speedmax: number = 500;
  speedVal : number = this.speedmin;
  quantityVal : number;

  constructor(private settingService: SettingService) { }

  ngOnInit(): void {
  }

  setSpeedValue(event) {
    this.speedVal = event.value;
    this.settingService.setSpedVal(this.speedVal);
  }
  setQuantityValue(event) {
    this.quantityVal = event.value;
    this.settingService.setQuantityVal(this.quantityVal);
  }
}
