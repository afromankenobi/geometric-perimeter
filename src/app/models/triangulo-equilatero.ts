import { TrianguloEscaleno } from './triangulo-escaleno';

export class TrianguloEquilatero extends TrianguloEscaleno {
  constructor(ladoA: number) {
    super(ladoA, ladoA, ladoA);
    this.nombre = 'Triángulo Equilátero';
  }

  calcularPerimetro(): number {
    return 3 * this.ladoA;
  }
}