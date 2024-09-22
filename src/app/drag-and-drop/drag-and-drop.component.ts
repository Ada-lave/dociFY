import { Component, Input } from '@angular/core';
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
  files:File[] = []
  @Input() maxFileCount:number = 1
  @Input() types:any[] =['docx']
  getFile(event: any) {
    console.log(event.target.files)
    if(this.files.length < this.maxFileCount) {
      let tempArray:File[] = Array.from(event.target.files)
      tempArray.forEach((file:File)=>{

        this.files.push(file)

      })
      console.log(this.files)
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
