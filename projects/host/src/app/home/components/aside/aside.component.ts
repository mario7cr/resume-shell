import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'rsm-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.scss'],
})
export class AsideComponent implements OnInit {
  constructor(private _translateService: TranslateService) {}

  get translate(): TranslateService {
    return this._translateService;
  }

  ngOnInit(): void {}
}
