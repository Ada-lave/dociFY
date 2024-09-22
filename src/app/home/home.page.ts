import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RefresherCustomEvent, IonHeader, IonToolbar, IonTitle, IonContent, IonRefresher, IonRefresherContent, IonList } from '@ionic/angular/standalone';
import { NgSwitcheryModule } from 'angular-switchery-ios';
import { SwitcherComponent } from '../switcher/switcher.component';
import { DragAndDropComponent } from '../drag-and-drop/drag-and-drop.component';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [
    CommonModule, IonHeader, IonToolbar, IonTitle,
     IonContent, IonRefresher, IonRefresherContent, IonList, 
     NgSwitcheryModule, SwitcherComponent,
     DragAndDropComponent
    ],
})
export class HomePage {
  constructor() {}

}
