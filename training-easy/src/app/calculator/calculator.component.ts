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

    { text: '7', cols: 1, rows: 1, color: 'lightblue' },
    { text: '8', cols: 1, rows: 1, color: 'lightblue' },
    { text: '9', cols: 1, rows: 1, color: 'lightblue' },
    { text: ' ', cols: 1, rows: 1, color: 'lightblue' },

    { text: '4', cols: 1, rows: 1, color: 'lightblue' },
    { text: '5', cols: 1, rows: 1, color: 'lightblue' },
    { text: '6', cols: 1, rows: 1, color: 'lightblue' },
    { text: ' ', cols: 1, rows: 1, color: 'lightblue' },

    { text: '1', cols: 1, rows: 1, color: 'lightblue' },
    { text: '2', cols: 1, rows: 1, color: 'lightblue' },
    { text: '3', cols: 1, rows: 1, color: 'lightblue' },
    { text: ' ', cols: 1, rows: 1, color: 'lightblue' },

    { text: '0', cols: 4, rows: 1, color: 'lightblue' },
  ];

  inputValue: string = '';
  sum: number;

  clicked(gridValue) {
    console.log(gridValue);
    this.inputValue = this.inputValue + gridValue;
  }

  calculate(lastVal) {
    this.inputValue = lastVal;
  this.sum = eval(this.inputValue)
  }
  

  constructor() { }

  ngOnInit() {
  }

}
