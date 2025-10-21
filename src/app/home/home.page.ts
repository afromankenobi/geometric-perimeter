import { Component, OnInit } from '@angular/core';
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
  IonCol,
  IonButtons,
  IonButton,
  IonIcon
} from '@ionic/angular/standalone';
import { addIcons  } from 'ionicons';
import { moon, sunny } from 'ionicons/icons';
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
    IonButtons,
    IonButton,
    IonIcon,
    CircleComponent,
    TriangleComponent
  ],
})
export class HomePage implements OnInit {
  selectedFigure: string = '';
  isDarkMode: boolean = false;

  constructor() {
    // Check if dark mode is already enabled
    this.isDarkMode = document.body.classList.contains('dark');
    addIcons({moon, sunny});
  }

  toggleDarkMode(): void {
    this.isDarkMode = !this.isDarkMode;
    document.documentElement.classList.toggle('ion-palette-dark', this.isDarkMode);


    // Store preference in localStorage
    localStorage.setItem('darkMode', this.isDarkMode.toString());
  }

  ngOnInit(): void {
    // Load dark mode preference from localStorage
    const savedDarkMode = localStorage.getItem('darkMode');
    if (savedDarkMode === 'true') {
      this.isDarkMode = true;
      this.toggleDarkMode();
    }
  }
}
