import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonItem,
  IonInput,
  IonButton,
  IonText,
  IonImg,
  IonModal,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonButtons,
  IonContent,
  IonGrid,
  IonRow,
  IonCol,
  ModalController
} from '@ionic/angular/standalone';
import { CommonModule } from '@angular/common';
import { TrianguloEscaleno } from '../../models/triangulo-escaleno';

@Component({
  selector: 'app-triangle',
  templateUrl: './triangle.component.html',
  styleUrls: ['./triangle.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardContent,
    IonItem,
    IonInput,
    IonButton,
    IonText,
    IonImg,
    IonModal,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonButtons,
    IonContent,
    IonGrid,
    IonRow,
    IonCol
  ]
})
export class TriangleComponent {
  ladoA: number | null = null;
  ladoB: number | null = null;
  ladoC: number | null = null;
  result: number | null = null;
  isImageModalOpen = false;

  constructor(private modalController: ModalController) {}

  calculate(): void {
    if (this.ladoA !== null && this.ladoB !== null && this.ladoC !== null &&
        this.ladoA > 0 && this.ladoB > 0 && this.ladoC > 0) {
      const triangulo = new TrianguloEscaleno(this.ladoA, this.ladoB, this.ladoC);
      this.result = triangulo.calcularPerimetro();
    }
  }

  get canCalculate(): boolean {
    return this.ladoA !== null && this.ladoB !== null && this.ladoC !== null &&
           this.ladoA > 0 && this.ladoB > 0 && this.ladoC > 0;
  }

  openImageModal(): void {
    this.isImageModalOpen = true;
  }

  closeImageModal(): void {
    this.isImageModalOpen = false;
  }
}