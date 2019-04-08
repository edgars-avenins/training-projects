import { Component, OnInit, Input } from '@angular/core';

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
    { text: '(', cols: 1, rows: 1, color: 'lightblue' },

    { text: '4', cols: 1, rows: 1, color: 'lightblue' },
    { text: '5', cols: 1, rows: 1, color: 'lightblue' },
    { text: '6', cols: 1, rows: 1, color: 'lightblue' },
    { text: ')', cols: 1, rows: 1, color: 'lightblue' },

    { text: '1', cols: 1, rows: 1, color: 'lightblue' },
    { text: '2', cols: 1, rows: 1, color: 'lightblue' },
    { text: '3', cols: 1, rows: 1, color: 'lightblue' },
    { text: 'DEL', cols: 1, rows: 1, color: 'lightblue' },

    { text: '0', cols: 3, rows: 1, color: 'lightblue' },
    { text: 'C', cols: 1, rows: 1, color: 'lightblue' },
  ];

  inputValue: string = '';
  sum: number;

  clicked(gridValue) {
    if (gridValue == 'C' || gridValue ==  'DEL') {
        this.calculatorDelete(gridValue);
    } else {
        this.inputValue = this.inputValue + gridValue;
    }
  }

  calculate() {
    this.sum = eval(this.inputValue)
  }
  
  calculatorDelete(operator) {
    if (operator == 'C') {
      this.refresh();
    } else {
      this.remove();
    }
  }

  refresh() {
    this.inputValue = '';
  }

  remove() {
    var strLen = this.inputValue.length;
    this.inputValue = this.inputValue.slice(0, strLen-1);
    console.log(this.inputValue);
  }

  constructor() { }

  ngOnInit() {
  }

}
