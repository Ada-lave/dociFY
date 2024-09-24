import { Component, OnInit } from '@angular/core';
import { NgClass } from '@angular/common';
@Component({
  selector: 'app-switcher',
  templateUrl: './switcher.component.html',
  styleUrls: ['./switcher.component.scss'],
  imports:[NgClass],
  standalone: true,
})
export class SwitcherComponent  implements OnInit {

  constructor() { }
  active:boolean = true
  changeActive(){
    this.active = !this.active
  }
  ngOnInit() {}

}
