import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent {

  @Output() postImg: EventEmitter<any> = new EventEmitter();

  imgs = [
    {
      src: "/static/piter-1.jpg",
      alt: "piter-1"
    },{
      src: "/static/piter-2.jpg",
      alt: "piter-2"
    }, {
      src: "/static/piter-3.jpg",
      alt: "piter-3"
    },
  ];

  onClick(img) {
    this.postImg.emit(img);
  }

  constructor() { }
}
