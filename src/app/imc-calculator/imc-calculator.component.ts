import { Component } from '@angular/core';

@Component({
  selector: 'app-imc-calculator',
  templateUrl: './imc-calculator.component.html',
  styleUrls: ['./imc-calculator.component.css']
})
export class ImcCalculatorComponent {
  peso: number = 0;
  altura: number = 0;
  result: number | undefined;
  classification: string = "";

  calculateIMC() {
    if (this.peso && this.altura) {
      const heightInMeters = this.altura / 100;
      this.result = + (this.peso / (heightInMeters * heightInMeters)).toFixed(2);
      this.classification = this.getClassification(this.result);
    }
  }

  getClassification(imc: number): string {
    if (imc < 18.5) {
      return 'Magreza';
    } else if (imc >= 18.5 && imc < 24.9) {
      return 'Peso normal';
    } else if (imc >= 25 && imc < 29.9) {
      return 'Sobrepeso';
    } else if (imc >= 30 && imc < 34.9) {
      return 'Obesidade Grau I';
    } else if (imc >= 35 && imc < 40) {
      return 'Obesidade Grau II';
    } else {
      return 'Obesidade Grau III';
  }

  }
}
