import { Component, OnInit, Input } from '@angular/core';
import { CONVRATESKILO, CONVRATESMETER, CONVRATESCENTI, CONVRATESMILI, CONVRATESMICRO, CONVRATESNANO } from '../conversionRatesData';

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

    switch (convFrom) {
      case 'kilometer': {
        
        var x = this.crKilo.find(function (element) {
          return element.unit === convTo;
        });

        this.convert(x, userInput);
        break;
      }
      case 'meter': {
        var x = this.crMeter.find(function (element) {
          return element.unit === convTo;
        });

        this.convert(x, userInput);
        break;
      }
      case 'centimeter': {
        var x = this.crCenti.find(function (element) {
          return element.unit === convTo;
        });

        this.convert(x, userInput);
        break;
      }
      case 'milimeter': {
        var x = this.crMili.find(function (element) {
          return element.unit === convTo;
        });

        this.convert(x, userInput);
        break;
      }
      case 'micrometer': {
        var x = this.crMicro.find(function (element) {
          return element.unit === convTo;
        });

        this.convert(x, userInput);
        break;
      }
      case 'nanometer': {
        var x = this.crNano.find(function (element) {
          return element.unit === convTo;
        });

        this.convert(x, userInput);
        break;
      }
      default: {
        console.log('Invalid choice');
      }
    }
  }

  convert(ratio, userInput) {
    this.result = +ratio.value * +userInput;
  }

  constructor() { }

  ngOnInit() {
  }

}
