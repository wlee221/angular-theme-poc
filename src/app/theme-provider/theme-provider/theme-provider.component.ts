import { Component, HostBinding, Input, OnInit } from '@angular/core';
import { ThemeService } from 'src/app/services/theme-service/theme.service';
import { Theme } from 'src/app/types';

@Component({
  selector: 'amplify-theme-provider',
  templateUrl: './theme-provider.component.html',
  styleUrls: ['./theme-provider.component.css'],
  providers: [ThemeService],
  // encapsulation: ViewEncapsulation.None,
})
export class ThemeProviderComponent implements OnInit {
  @HostBinding('style.display') display = 'contents';
  @Input() theme!: Theme;
  public style: Record<string, string> = {};

  constructor(private themeService: ThemeService) {}

  ngOnInit(): void {
    if (!this.theme?.tokens?.components?.button?.primary) {
      return;
    }

    // update the service to store the current theme under this provider
    this.themeService.theme = this.theme;
    
    console.log(this.themeService.theme)

    const {
      tokens: {
        components: {
          button: {
            primary: { backgroundColor, _hover, _active, _focus },
          },
        },
      },
    } = this.theme;

    this.style = {
      '--amplify-components-button-primary-background-color':
        backgroundColor?.value,
      '--amplify-components-button-primary-hover-background-color':
        _hover.backgroundColor?.value,
      '--amplify-components-button-primary-focus-background-color':
        _focus.backgroundColor?.value,
      '--amplify-components-button-primary-active-background-color':
        _active.backgroundColor?.value,
    };
  }
}
