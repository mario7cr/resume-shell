import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TranslateModule } from '@ngx-translate/core';
import { FlexLayoutModule } from '@angular/flex-layout';

import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatToolbar, MatToolbarModule } from '@angular/material/toolbar';

import { CopyToClipboardDirective } from './directives/copy-to-clipboard.directive';
import { SafePipe } from './pipes/safe.pipe';

@NgModule({
  declarations: [
    CopyToClipboardDirective,
    SafePipe
  ],
  imports: [
    CommonModule,

    TranslateModule,
    FlexLayoutModule,

    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatTooltipModule,
    MatToolbarModule
  ],
  exports: [
    CommonModule,

    TranslateModule,
    FlexLayoutModule,

    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatTooltipModule,
    MatToolbarModule,

    CopyToClipboardDirective,

    SafePipe,
  ],
})
export class SharedModule {
  static forRoot(): ModuleWithProviders<SharedModule> {
    return {
      ngModule: SharedModule,
    };
  }
}
