import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'rsm-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  copyrights: string = 'MABN Soluções em Tecnologia';

  constructor() {}

  ngOnInit(): void {}
}
