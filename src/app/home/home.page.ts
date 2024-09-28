import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RefresherCustomEvent, IonHeader, IonToolbar, IonTitle, IonContent, IonRefresher, IonRefresherContent, IonList, IonButton } from '@ionic/angular/standalone';
import { SwitcherComponent } from '../switcher/switcher.component';
import { DragAndDropComponent } from '../drag-and-drop/drag-and-drop.component';
import { FileService } from '../services/file.service';
import { ToastrService } from 'ngx-toastr';
import { catchError, EMPTY } from 'rxjs';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonButton,
    CommonModule, IonHeader, IonToolbar, IonTitle,
    IonContent, IonRefresher, IonRefresherContent, IonList,
    SwitcherComponent,
    DragAndDropComponent
  ],
})
export class HomePage {
  files: File[] = []
  fileOnProcess: boolean = false

  constructor(
    private fileService: FileService,
    private toastSerivce: ToastrService
  ) { }

  handleFiles(files: File[]) {
    this.files = files
    console.log(files)
  }

  sendFiles() {
    this.toastSerivce.info("По окончанию он загрузиться сам", "Файл отправлен в обработку")
    let formData = new FormData()
    let file = this.files[0]

    formData.append('file',file)
    formData.append('add_spaces_beetween_image_text', 'true')

    this.files = []
    this.fileService.sendFiles(formData).pipe(
      catchError((err:any) => {
        this.toastSerivce.error("Что то пошло не так")
        return EMPTY
      })
    ).subscribe((response: Blob) => {
      const blob = new Blob([response], { type: 'application/octet-stream' })
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = file.name; // Здесь можно задать имя загружаемого файла
      document.body.appendChild(a);
      this.toastSerivce.success("Файл успешно отформатирован", "Успешно")
      a.click();
      a.remove();
      window.URL.revokeObjectURL(url);
    })
  }
}
