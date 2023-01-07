import { Component, OnInit } from '@angular/core';
import { formula } from '../y=aX+b/app.y=aX+b';

@Component({
  selector: 'app-ui',
  templateUrl: './ui.component.html',
  styleUrls: ['./ui.component.css']
})
export class UiComponent implements OnInit {

  constructor() { }
  result="";
  numerosTxt="";
  a = 0;
  b = 0;

  ngOnInit() {
  }

  formula() {
    let ResultadoArr :number[]=[]
    let NumerosArrTxt:string[]=[];
    let NumerosArr:number[]=[];

    NumerosArrTxt = this.numerosTxt.split(",");
    const n= NumerosArrTxt.length;
    
    for (let i = 0; i < n; i++) {
        NumerosArr[i]=parseFloat(NumerosArrTxt[i]);
      }
    ResultadoArr = formula(NumerosArr,this.a,this.b);
        this.result = ResultadoArr.toString();
  }

}