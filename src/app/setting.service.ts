import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SettingService {

  speedVal: number; 
  quantityVal: number;

  constructor() { }

  setSpedVal(speed){
    this.speedVal = speed;
  }

  setQuantityVal(quantity){
    this.quantityVal = quantity;
  }
}
