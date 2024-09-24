import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RefresherCustomEvent, IonHeader, IonToolbar, IonTitle, IonContent, IonRefresher, IonRefresherContent, IonList, IonButton } from '@ionic/angular/standalone';
import { NgSwitcheryModule } from 'angular-switchery-ios';
import { SwitcherComponent } from '../switcher/switcher.component';
import { DragAndDropComponent } from '../drag-and-drop/drag-and-drop.component';
import { FileService } from '../services/file.service';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonButton,
    CommonModule, IonHeader, IonToolbar, IonTitle,
    IonContent, IonRefresher, IonRefresherContent, IonList,
    NgSwitcheryModule, SwitcherComponent,
    DragAndDropComponent
  ],
})
export class HomePage {
  files: File[] = []

  constructor(
    private fileService: FileService
  ) { }

  handleFiles(files: File[]) {
    this.files = files
    console.log(files)
  }

  sendFiles() {
    let formData = new FormData()
    formData.append('file', this.files[0])
    formData.append('add_spaces_beetween_image_text', 'true')
    console.log(this.files[0])
    this.fileService.sendFiles(formData).subscribe((response: Blob) => {
      const blob = new Blob([response], {type: 'application/octet-stream'})
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = this.files[0].name; // Здесь можно задать имя загружаемого файла
      document.body.appendChild(a);
      a.click();
      a.remove();
      window.URL.revokeObjectURL(url);
    })
  }

}
