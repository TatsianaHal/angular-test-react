import { Component } from '@angular/core';

// import { SettingsComponent } from './components/settings/settings.component';
// import { PreviewComponent } from './components/preview/preview.component';
// import { SaveBtnComponent } from './components/save-btn/save-btn.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  image;
  appPostImg(event) {
    this.image = event;
    console.log(event);
  }
}
