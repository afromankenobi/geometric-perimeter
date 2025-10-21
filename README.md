
# Aplicación Híbrida de Cálculo de Perímetros

## 1. Creación del proyecto Ionic + Angular

Proyecto creado con la CLI:

``` bash
npm install -g @ionic/cli
ionic start geometric-perimeter blank --type=angular
cd geometric-perimeter/
```

- Angular 20.0.0 con Standalone Components
- Ionic Framework 8.0.0
- TypeScript 5.8.0
- Capacitor 7.4.3 para funcionalidades híbridas

La estructura base:
- Configuración de enrutamiento standalone
- Página home inicial con plantilla básica
- Configuración de estilos globales con soporte para modo oscuro
- Configuración de Capacitor para multiplataforma

## 2. Programación de la jerarquía de clases en TypeScript

Se implementó la jerarquía de clases siguiendo el diagrama UML proporcionado:

### Clase Abstracta Base: FiguraGeometrica

```typescript
export abstract class FiguraGeometrica {
  constructor(protected nombre: string) {}
  abstract calcularPerimetro(): number;
  get getNombre(): string { return this.nombre; }
}
```

### Clase Circulo
```typescript
export class Circulo extends FiguraGeometrica {
  constructor(private radio: number) { super('Círculo'); }
  calcularPerimetro(): number { return 2 * Math.PI * this.radio; }
}
```

### Clase TrianguloEscaleno
```typescript
export class TrianguloEscaleno extends FiguraGeometrica {
  constructor(protected ladoA: number, protected ladoB: number, protected ladoC: number) {
    super('Triángulo Escaleno');
  }
  calcularPerimetro(): number { return this.ladoA + this.ladoB + this.ladoC; }
}
```

### Clase TrianguloEquilatero
```typescript
export class TrianguloEquilatero extends TrianguloEscaleno {
  constructor(ladoA: number) { super(ladoA, ladoA, ladoA); }
  calcularPerimetro(): number { return 3 * this.ladoA; }
}
```

La jerarquía implementa correctamente:
- Herencia de clase abstracta
- Encapsulación de propiedades
- Polimorfismo en el método calcularPerimetro()
- Reutilización de código entre clases padre e hijo

## 3. Creación de Componentes Circle y Triangle

### a. Desarrollo de las plantillas

**Componente Circle:**
- Utiliza ion-card para presentación estructurada
- Incluye descripción del perímetro y fórmula matemática
- Diagrama SVG personalizado mostrando círculo con radio marcado
- Campo de entrada para radio con validación
- Botón de cálculo con estado deshabilitado condicional
- Área de resultado con formato numérico

**Componente Triangle:**
- Estructura similar con ion-card
- Descripción completa del concepto de perímetro triangular
- Diagrama SVG de triángulo con lados etiquetados (a, b, c)
- Tres campos de entrada para los lados del triángulo
- Fórmula visual: p = a + b + c
- Validación para habilitar cálculo solo con valores positivos

### b. Desarrollo de las clases TypeScript de componentes

**CircleComponent:**
```typescript
@Component({
  selector: 'app-circle',
  standalone: true,
  imports: [CommonModule, FormsModule, IonCard, ...]
})
export class CircleComponent {
  radius: number | null = null;
  result: number | null = null;

  calculate(): void {
    if (this.radius !== null && this.radius > 0) {
      const circulo = new Circulo(this.radius);
      this.result = circulo.calcularPerimetro();
    }
  }
}
```

**TriangleComponent:**
```typescript
@Component({
  selector: 'app-triangle',
  standalone: true,
  imports: [CommonModule, FormsModule, IonCard, ...]
})
export class TriangleComponent {
  ladoA: number | null = null;
  ladoB: number | null = null;
  ladoC: number | null = null;
  result: number | null = null;

  get canCalculate(): boolean {
    return this.ladoA > 0 && this.ladoB > 0 && this.ladoC > 0;
  }
}
```

Características:
- Componentes standalone con imports explícitos
- Uso de two-way data binding con ngModel
- Validación de entrada antes del cálculo
- Instanciación correcta de las clases modelo
- Formateo de resultados numéricos

## 4. Integración de los componentes en "Home"

Se modificó el componente Home para:

### Funcionalidad del Selector:
- ion-select con opciones para círculo y triángulo
- Variable selectedFigure para controlar la selección
- Renderizado condicional usando *ngIf

### Estructura de la página:
```html
<ion-card>
  <ion-select [(ngModel)]="selectedFigure">
    <ion-select-option value="circulo">círculo</ion-select-option>
    <ion-select-option value="triangulo">triángulo</ion-select-option>
  </ion-select>
</ion-card>

<app-circle *ngIf="selectedFigure === 'circulo'"></app-circle>
<app-triangle *ngIf="selectedFigure === 'triangulo'"></app-triangle>
```

### Importaciones y configuración:
- Importación de componentes personalizados
- FormsModule para ngModel
- CommonModule para directivas estructurales
- Me encanta SAAS (SCSS)

## 5. Dificultades encontradas

### Compatibilidad de versiones:
- Angular 20 con Ionic 8 requirió ajustes en las importaciones
- Los standalone components requieren imports explícitos de cada módulo Ionic.
- Como es posible que los modals no sean fullscreen?

### Estilización responsive:
- Ajustar el layout para que funcione correctamente en diferentes tamaños de pantalla
- Balancear el uso de CSS custom properties de Ionic con estilos personalizados
- MUCHO TIEMPO SIN ESCRIBIR CSS

### Falta de experiencia en IONIC
- Por dios que fue dificil hacer un zoom pa mi mente habituada a jQuery.

### Validación de entrada:
- Implementar validación para evitar cálculos con valores inválidos
- Manejar estados null y undefined correctamente

### Imagenes
- Nunca super que imagen poner, al final entre intento e intento terminé con un par de imágenes de internet.

## 6. Reflexión final

### Cómo puedo mejorar:
1. **Validación más robusta**: Implementar validación de triángulos válidos.
2. **Variedad de figuras geométricas**: No me dio el tiempo para implementar más cosas.
3. **Animaciones**: Agregar transiciones suaves entre componentes

### En qué necesito ayuda:
1. **IONIC experience**: Necesito practicar más.

### Logros alcanzados:
- Aplicación funcional completa.
- Interfaz responsive.
- Hice un componente para ZOOM de las imágenes, aunque aún no logro hacerlo funcionar bien en todos los viewports.
