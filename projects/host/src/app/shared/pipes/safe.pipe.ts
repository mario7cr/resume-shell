import { Pipe, PipeTransform } from '@angular/core';
import {
  DomSanitizer,
  SafeHtml,
  SafeResourceUrl,
  SafeScript,
  SafeStyle,
  SafeUrl,
} from '@angular/platform-browser';

@Pipe({
  name: 'safe',
})
export class SafePipe implements PipeTransform {
  constructor(private _domSanitizer: DomSanitizer) {}

  transform(
    value: string,
    ...args: string[]
  ): SafeHtml | SafeResourceUrl | SafeScript | SafeStyle | SafeUrl | null {
    const [type] = args;

    switch (type) {
      case 'html':
        return this._domSanitizer.bypassSecurityTrustHtml(value);
      case 'resourceUrl':
        return this._domSanitizer.bypassSecurityTrustResourceUrl(value);
      case 'script':
        return this._domSanitizer.bypassSecurityTrustScript(value);
      case 'style':
        return this._domSanitizer.bypassSecurityTrustStyle(value);
      case 'url':
        return this._domSanitizer.bypassSecurityTrustUrl(value);
      default:
        return null;
    }
  }
}
