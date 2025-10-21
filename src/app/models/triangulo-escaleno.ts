import { FiguraGeometrica } from './figura-geometrica';

export class TrianguloEscaleno extends FiguraGeometrica {
  constructor(
    protected ladoA: number,
    protected ladoB: number,
    protected ladoC: number
  ) {
    super('Triángulo Escaleno');
  }

  calcularPerimetro(): number {
    return this.ladoA + this.ladoB + this.ladoC;
  }

  get getLadoA(): number {
    return this.ladoA;
  }

  get getLadoB(): number {
    return this.ladoB;
  }

  get getLadoC(): number {
    return this.ladoC;
  }
}