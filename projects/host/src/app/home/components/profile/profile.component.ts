import { Component, OnInit } from '@angular/core';
import { forkJoin } from 'rxjs';

import { TranslateService } from '@ngx-translate/core';
import { CandidateService } from '../../services/candidate.service';

import { Candidate } from '../../shared/candidate';
import { EducationalInstitution } from '../../shared/educational-institution';
import { KnownLanguage } from '../../shared/known-language';
import { Workplace } from '../../shared/workplace';

type ResponseTranslate =
  | Workplace[]
  | EducationalInstitution[]
  | KnownLanguage[];

@Component({
  selector: 'rsm-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  workplaces: Workplace[];
  education: EducationalInstitution[];
  languages: KnownLanguage[];

  constructor(
    private _translateService: TranslateService,
    private _candidateService: CandidateService
  ) {}

  get translate(): TranslateService {
    return this._translateService;
  }

  get candidate(): Candidate {
    return this._candidateService.candidate;
  }

  ngOnInit(): void {
    forkJoin(
      ['workplaces', 'educationalInstitutions', 'knownLanguages'].map((key) =>
        this._translateService.get(key)
      )
    ).subscribe((results: ResponseTranslate[]) => {
      const [workplaces, institutions, languages] = results;

      this.workplaces = (workplaces as Workplace[]).map(
        (workplace) =>
          ({
            ...workplace,
            startDate: new Date(workplace.startDate),
            endDate: workplace.endDate ? new Date(workplace.endDate) : null,
          } as Workplace)
      );

      this.education = (institutions as EducationalInstitution[]).map(
        (institution) =>
          ({
            ...institution,
            startDate: new Date(institution.startDate),
            endDate: institution.endDate ? new Date(institution.endDate) : null,
          } as EducationalInstitution)
      );

      this.languages = languages as KnownLanguage[];
    });
  }
}
