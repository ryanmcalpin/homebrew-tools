import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { ConversionComponent } from './conversion/conversion.component';
import { CalculatorsComponent } from './calculators/calculators.component';
import { AbvCalculatorComponent } from './abv-calculator/abv-calculator.component';
import { WelcomeComponent } from './welcome/welcome.component';

@NgModule({
  declarations: [
    AppComponent,
    ConversionComponent,
    CalculatorsComponent,
    AbvCalculatorComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
