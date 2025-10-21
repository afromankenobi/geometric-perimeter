export abstract class FiguraGeometrica {
  constructor(protected nombre: string) {}

  abstract calcularPerimetro(): number;

  get getNombre(): string {
    return this.nombre;
  }
}