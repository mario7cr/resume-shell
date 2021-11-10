import { Component, OnInit } from '@angular/core';
import { CandidateService } from '../../services/candidate.service';
import { Candidate } from '../../shared/candidate';

@Component({
  selector: 'rsm-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private _candidateService: CandidateService) { }

  get candidate(): Candidate {
    return this._candidateService.candidate;
  }

  ngOnInit(): void {
  }

}
