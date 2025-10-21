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
  ModalController
} from '@ionic/angular/standalone';
import { CommonModule } from '@angular/common';
import { Circulo } from '../../models/circulo';

@Component({
  selector: 'app-circle',
  templateUrl: './circle.component.html',
  styleUrls: ['./circle.component.scss'],
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
    IonContent
  ]
})
export class CircleComponent {
  radius: number | null = null;
  result: number | null = null;
  isImageModalOpen = false;

  constructor(private modalController: ModalController) {}

  calculate(): void {
    if (this.radius !== null && this.radius > 0) {
      const circulo = new Circulo(this.radius);
      this.result = circulo.calcularPerimetro();
    }
  }

  openImageModal(): void {
    this.isImageModalOpen = true;
  }

  closeImageModal(): void {
    this.isImageModalOpen = false;
  }
}