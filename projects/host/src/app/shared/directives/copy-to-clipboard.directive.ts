import { Directive, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[rsmCopyToClipboard]',
})
export class CopyToClipboardDirective {
  @Input('rsmCopyToClipboard') copyToClipboard: string;

  constructor() {}

  @HostListener('click') onClick() {
    this._copyToClipboard();
  }

  private _copyToClipboard(): void {
    navigator.clipboard
      .writeText(this.copyToClipboard)
      .catch((error) => console.error({ error }));
  }
}
