import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatGridListModule} from '@angular/material/grid-list';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { ConversionComponent } from './conversion/conversion.component';
import { LayoutComponent } from './layout/layout.component';

@NgModule({
  declarations: [
    AppComponent,
    CalculatorComponent,
    ConversionComponent,
    LayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatGridListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
