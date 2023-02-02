import { Injectable } from '@angular/core';
import { Theme } from '../../types';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private _theme: Theme | null = null;

  public get theme(): Theme | null {
    return this._theme;
  }

  public set theme(theme: Theme | null) {
    this._theme = theme;
  }
}
