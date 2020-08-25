import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SettingService {

  delayVal: number; 
  quantityVal: number;

  isAddAlgo: boolean = false;

  constructor() { }

  setDelayVal(delay){
    this.delayVal = delay;
  }

  setQuantityVal(quantity){
    this.quantityVal = quantity;
  }

  setNewAlgo(){
    this.isAddAlgo = true;
  }
}
