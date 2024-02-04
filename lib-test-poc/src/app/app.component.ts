import { Component } from '@angular/core';
import { CalculatorService } from 'calculator';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'lib-test-poc';

  constructor(private calculatorService: CalculatorService) {
    console.log('Using calculator service from library. 1 + 2 is ...', this.calculatorService.add(1, 2));
  }
}
