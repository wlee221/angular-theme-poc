import { Component, ViewEncapsulation } from '@angular/core';
import { Theme } from './types';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent {
  title = 'angular-theming-spike';
  public purpleTheme: Theme = {
    name: 'purple-theme',
    tokens: {
      components: {
        button: {
          primary: {
            backgroundColor: { value: '#0057ff' },
            _hover: { backgroundColor: { value: '#4d89fc' } },
            _focus: { backgroundColor: { value: '#0045c4' } },
            _active: { backgroundColor: { value: '#0045c4' } },
          },
        },
      },
    },
  };

  public greenTheme: Theme = {
    name: 'green-theme',
    tokens: {
      components: {
        button: {
          primary: {
            backgroundColor: { value: '#689787' },
            _hover: { backgroundColor: { value: '#9DE3CB' } },
            _focus: { backgroundColor: { value: '#456359' } },
            _active: { backgroundColor: { value: '#456359' } },
          },
        },
      },
    },
  };
}
