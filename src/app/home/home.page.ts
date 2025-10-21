import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonSelect,
  IonSelectOption,
  IonItem,
  IonLabel,
  IonGrid,
  IonRow,
  IonCol
} from '@ionic/angular/standalone';
import { CommonModule } from '@angular/common';
import { CircleComponent } from '../components/circle/circle.component';
import { TriangleComponent } from '../components/triangle/triangle.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [
    CommonModule,
    FormsModule,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardContent,
    IonSelect,
    IonSelectOption,
    IonItem,
    IonLabel,
    IonGrid,
    IonRow,
    IonCol,
    CircleComponent,
    TriangleComponent
  ],
})
export class HomePage {
  selectedFigure: string = '';

  constructor() {}
}
