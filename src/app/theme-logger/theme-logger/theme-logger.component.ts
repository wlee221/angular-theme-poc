import { Component } from '@angular/core';
import { ThemeService } from 'src/app/services/theme-service/theme.service';

@Component({
  selector: 'amplify-theme-logger',
  templateUrl: './theme-logger.component.html',
  styleUrls: ['./theme-logger.component.css'],
})
export class ThemeLoggerComponent {
  constructor(private themeService: ThemeService) {}

  public get themeName() {
    return this.themeService.theme?.name;
  }

  public get backgroundColor() {
    return this.themeService.theme?.tokens?.components?.button?.primary
      ?.backgroundColor?.value;
  }
}
