import { Component, OnInit } from '@angular/core';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  tiles: Tile[] = [
    { text: '+', cols: 1, rows: 1, color: 'lightblue' },
    { text: '-', cols: 1, rows: 1, color: 'lightblue' },
    { text: '*', cols: 1, rows: 1, color: 'lightblue' },
    { text: '/', cols: 1, rows: 1, color: 'lightblue' },
  ];

  inputValue: string;
  sum: number;

  clicked(operator, value1) {
    console.log(operator);
    this.inputValue = value1 + operator ;
  }

  calculate(lastVal) {
    this.inputValue = lastVal;
  this.sum = eval(this.inputValue)
  }
  

  constructor() { }

  ngOnInit() {
  }

}
