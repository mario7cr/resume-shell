import { Component, OnInit } from '@angular/core';
import { CandidateService } from './services/candidate.service';

@Component({
  selector: 'rsm-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private _candidateService: CandidateService) { }

  ngOnInit(): void {
    this._candidateService.candidate = {
      name: 'Mário Augusto',
      surename: 'Brandão Neto',
      role: 'Frontend Developer',
      email: 'mario.7cr@gmail.com',
      phone: '+55 13 98849-3116',
      age: new Date().getFullYear() - 1992,
    };
  }

}
