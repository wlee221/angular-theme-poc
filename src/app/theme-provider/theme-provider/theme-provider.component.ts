import { Component, HostBinding, Input, OnInit } from '@angular/core';
import { Theme } from 'src/app/types';

@Component({
  selector: 'amplify-theme-provider',
  templateUrl: './theme-provider.component.html',
  styleUrls: ['./theme-provider.component.css'],
  // encapsulation: ViewEncapsulation.None,
})
export class ThemeProviderComponent implements OnInit {
  @HostBinding('style.display') display = 'contents';
  @Input() theme!: Theme;
  public style = { color: 'red' } as any;
  public color = '#0057ff';

  ngOnInit(): void {
    if (!this.theme?.tokens?.components?.button?.primary) {
      return;
    }

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

    console.log(this.style);
  }
}
