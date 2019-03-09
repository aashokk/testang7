import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NewserviceService {
 employees : any [];
  constructor() {
    this.employees = [
      {
        empid : "001", name : "ashok"
      },
      {
        empid : "002", name : "kumar"
      }
    ];

   }

  display(){
    return "this is service page new";
  }
}
