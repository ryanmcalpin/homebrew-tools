import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ConversionComponent } from './conversion/conversion.component';
import { CalculatorsComponent } from './calculators/calculators.component';
import { AbvCalculatorComponent } from './abv-calculator/abv-calculator.component';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
  {
    path: '',
    component: WelcomeComponent
  },
  {
    path: 'conversion',
    component: ConversionComponent
  },
  {
    path: 'calculators',
    component: CalculatorsComponent
  },
  {
    path: 'calculators/abv',
    component: AbvCalculatorComponent
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}
