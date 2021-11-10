import { Injectable } from '@angular/core';
import { Candidate } from '../shared/candidate';

@Injectable({
  providedIn: 'root'
})
export class CandidateService {

  private _candidate: Candidate;

  constructor() { }

  set candidate(value: Candidate) {
    this._candidate = value;
  }

  get candidate(): Candidate {
    return this._candidate;
  }
}
