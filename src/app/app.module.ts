import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SettingsComponent } from './components/settings/settings.component';
import { PreviewComponent } from './components/preview/preview.component';
import { SaveBtnComponent } from './components/save-btn/save-btn.component';

@NgModule({
  declarations: [
    AppComponent,
    SettingsComponent,
    PreviewComponent,
    SaveBtnComponent
  ],
  imports: [
    BrowserModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
