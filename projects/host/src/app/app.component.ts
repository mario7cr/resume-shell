import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { CustomIconService } from './core/custom-icon.service';

@Component({
  selector: 'rsm-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(
    private _customIconService: CustomIconService,
    private _translate: TranslateService
  ) {}

  ngOnInit(): void {
    const language = navigator.language === 'pt-BR' ? 'pt' : 'en';

    this._customIconService.load();
    this._translate.setDefaultLang(language);
  }
}
