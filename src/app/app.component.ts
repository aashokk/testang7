import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NewserviceService } from './newservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers : [NewserviceService]
})
export class AppComponent {
  title = 'testang7';
  text = '';
   isvalid = true;
   choosen = '';
   data = 'ashok';
   data1 = 'kumar';
   pipeDate = new Date();
   pipeCurrency = "50000";
  employee : any[];
   studentDetails : any [] = [
     {
       name : "ashok",
       des : 'Dev',
       gender : "male"
     },{
      name : "gwori",
      des : "UI",
      gender : "female"
    },{
      name : "sidd",
      des : 'Android',
      gender : "male"
    },
   ];

    studentDetailsGroup : any [] = [
      {
        country : "india",
        people : [
          {
            name : "ashok"
          },
          {
            name : "kumar"
          }
        ]
      },
      {
        country : "USA",
        people : [
          {
            name : "sidd"
          },
          {
            name : "ashoksidd"
          }
        ]
      }
    ];

   checkValid(valid){
    this.isvalid = valid;
   }

   changeOption(drp : any){
     this.choosen = drp.target.value;
   }

   constructor(private router:Router, private _newserive : NewserviceService){}
   ngOnInit(){
    this.employee = this._newserive.employees;
    this.text = this._newserive.display();
  }
   student(){
     this.router.navigate(['/student'])
   }
}
