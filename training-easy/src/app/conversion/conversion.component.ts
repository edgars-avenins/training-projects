import { Component, OnInit, Input } from '@angular/core';
import { CONVRATESKILO, CONVRATESMETER, CONVRATESCENTI, CONVRATESMILI, CONVRATESMICRO, CONVRATESNANO } from '../conversionRatesData';
import { type } from 'os';
import { forEach } from '@angular/router/src/utils/collection';

export interface ConversionRates {
  conversion: string;
}

@Component({
  selector: 'app-conversion',
  templateUrl: './conversion.component.html',
  styleUrls: ['./conversion.component.css']
})
export class ConversionComponent implements OnInit {

  conversionRates: ConversionRates[] = [
    { conversion: 'meter'},
    { conversion: 'kilometer'},
    { conversion: 'centimeter'},
    { conversion: 'milimeter'},
    { conversion: 'micrometer'},
    { conversion: 'nanometer'}
  ];

  crKilo = CONVRATESKILO;
  crMeter = CONVRATESMETER;
  crCenti = CONVRATESCENTI;
  crMili = CONVRATESMILI;
  crMicro = CONVRATESMICRO;
  crNano = CONVRATESNANO;

  result: number;


  conversionType(convFrom, convTo, userInput) {
    console.log(convFrom, " ", convTo, " ", userInput);

    switch (convFrom) {
      case 'kilometer': {
        
        var x = this.crKilo.find(function (element) {
          return element.unit === convTo;
        });

        this.convert(x, userInput);
        console.log(x.value);
        break;
      }
      case 'meter': {
        console.log(convFrom);
        break;
      }
      case 'centimeter': {
        console.log(convFrom);
        break;
      }
      case 'milimeter': {
        console.log(convFrom);
        break;
      }
      case 'micrometer': {
        console.log(convFrom);
        break;
      }
      case 'nanometer': {
        console.log(convFrom);
        break;
      }
      default: {
        console.log('Invalid choice');
      }
    }
  }

  convert(ratio, userInput) {
    console.log(ratio, " * ", userInput);
    this.result = +ratio.value * +userInput;
  }

  constructor() { }

  ngOnInit() {
  }

}
