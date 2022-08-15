import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  private storage: any;
  constructor() {
    this.storage = localStorage;
  }
  public retrieve(key:string){
    const item = this.storage.getItem(key);
    if(item && item !== 'undefined'){
      console.log(item);
      
      return JSON.parse(item);
    }
    return;
  }
  public store(key: string, value: any){
    this.storage.setItem(key, JSON.stringify(value));
  }
}
