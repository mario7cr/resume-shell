import { Injectable } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root',
})
export class CustomIconService {
  customIconPath: string = '../assets/svg';
  customIconList: string[] = ['github', 'linkedin'];

  constructor(
    private _matIconRegistry: MatIconRegistry,
    private _domSanitizer: DomSanitizer
  ) {}

  load(): void {
    for (let customIcon of this.customIconList) {
      this._matIconRegistry.addSvgIconInNamespace(
        'custom',
        customIcon,
        this._domSanitizer.bypassSecurityTrustResourceUrl(
          `${this.customIconPath}/${customIcon}.svg`
        )
      );
    }
  }
}
