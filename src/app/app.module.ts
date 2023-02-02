import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ThemeProviderComponent } from './theme-provider/theme-provider/theme-provider.component';
import { ButtonComponent } from './primitives/button/button.component';

@NgModule({
  declarations: [
    AppComponent,
    ThemeProviderComponent,
    ButtonComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
