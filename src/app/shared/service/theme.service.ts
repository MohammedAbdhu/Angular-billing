import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  toggleTheme(isDarkMode: boolean): void {
    const body = document.body;
    body.classList.toggle('light-theme', !isDarkMode);
    body.classList.toggle('dark-theme', isDarkMode);
  }
}
