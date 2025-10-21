import { FiguraGeometrica } from './figura-geometrica';

export class Circulo extends FiguraGeometrica {
  constructor(private radio: number) {
    super('Círculo');
  }

  calcularPerimetro(): number {
    return 2 * Math.PI * this.radio;
  }

  get getRadio(): number {
    return this.radio;
  }
}