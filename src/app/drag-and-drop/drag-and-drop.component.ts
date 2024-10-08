import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-drag-and-drop',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './drag-and-drop.component.html',
  styleUrl: './drag-and-drop.component.scss'
})
export class DragAndDropComponent {
  file:any
  @Input() files:File[] = []
  @Input() maxFileCount:number = 1
  @Input() types:any[] =['docx']
  @Output() fileSelected: EventEmitter<File[]> = new EventEmitter<File[]>()

  getFile(event: any) {
    if(this.files.length < this.maxFileCount) {
      let tempArray:File[] = Array.from(event.target.files)
      tempArray.forEach((file:File)=>{

        this.files.push(file)

      })
      this.fileSelected.emit(this.files)
    }
  }

  dragenterFile(event: HTMLElement){
    event.style.background = '#009bfc1a';
    event.style.border = '4px dashed  #009bfc82'
  }
  dragenterFileLeave(event: HTMLElement){
    event.classList.remove('file-container_active')
    event.style.background = '';
  }

}
