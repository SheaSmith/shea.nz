import { Inject, Injectable } from '@angular/core';
import { BehaviorSubject, Observable, timer } from 'rxjs';

const themes: Theme[] = [
  {
    name: 'Windows 95',
    path: 'assets/themes/win95.css',
    date: new Date('1995-08-24')
  }
];

@Injectable({
  providedIn: 'root'
})
export class ThemingService {

  link: HTMLLinkElement;
  $loaded = new BehaviorSubject<boolean>(false);

  manager = new StyleManager();

  get selectedTheme() {
    if (themes.find(t => t.name == localStorage.getItem('theme')) == null) {
      return themes[0];
    }

    return themes.find(t => t.name == localStorage.getItem('theme'));
  }

  constructor() {
    this.load(this.selectedTheme);
  }

  load(theme: Theme) {
    localStorage.setItem('theme', theme.name);

    this.manager.setStyle('theme', theme.path).subscribe(() => {
      this.$loaded.next(true);
    });
  }
}

class StyleManager {
  /**
   * Set the stylesheet with the specified key.
   */
  setStyle(key: string, href: string) {
    return new Observable(s => {
      const link = getLinkElementForKey(key) as HTMLLinkElement;

      link.onload = () => {
        s.next(true);
        s.complete();
      };

      // onload only works once, so if the user changes the theme wait 5 seconds then call it manually
      // Not ideal but needed to update things like favicon and graphs which rip colors out of css
      timer(5000).subscribe(() => {
        if (!s.closed) {
          s.next(true);
          s.complete();
        }
      });

      link.setAttribute('href', href);
    });
  }

  /**
   * Remove the stylesheet with the specified key.
   */
  removeStyle(key: string) {
    const existingLinkElement = getExistingLinkElementByKey(key);
    if (existingLinkElement) {
      document.head.removeChild(existingLinkElement);
    }
  }
}

function getLinkElementForKey(key: string, rel = 'stylesheet') {
  return getExistingLinkElementByKey(key, rel) || createLinkElementWithKey(key, rel);
}

function getExistingLinkElementByKey(key: string, rel = 'stylesheet') {
  return document.head.querySelector(`link[rel="${rel}"].${getClassNameForKey(key)}`);
}

function createLinkElementWithKey(key: string, rel = 'stylesheet') {
  const linkEl = document.createElement('link');
  linkEl.setAttribute('rel', rel);
  linkEl.classList.add(getClassNameForKey(key));
  document.head.appendChild(linkEl);
  return linkEl;
}

function getClassNameForKey(key: string) {
  return `style-manager-${key}`;
}

export interface Theme {
  name: string;
  path: string;
  date: Date;
}
