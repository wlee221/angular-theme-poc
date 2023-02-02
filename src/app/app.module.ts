import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ThemeProviderComponent } from './theme-provider/theme-provider/theme-provider.component';
import { ButtonComponent } from './primitives/button/button.component';
import { ThemeLoggerComponent } from './theme-logger/theme-logger/theme-logger.component';

@NgModule({
  declarations: [AppComponent, ThemeProviderComponent, ButtonComponent, ThemeLoggerComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
