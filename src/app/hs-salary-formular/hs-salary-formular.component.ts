import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Skill } from '../../models/skill';
import { SkillWithLevel } from '../../models/skill-with-level';
import { SkillWithRequirement } from '../../models/skill-with-requirement';
import { MainSkills } from '../../models/main-skills';
import { ISkills } from '../../models/skills';

@Component({
  selector: 'app-hs-salary-formular',
  templateUrl: './hs-salary-formular.component.html',
  styleUrls: ['./hs-salary-formular.component.css']
})
export class HsSalaryFormularComponent {
  skilltree: ISkills;

  // @todo #3 This should developed as a small service.
  // @todo #3 Whats the problem!
  constructor() {

    this.skilltree = MainSkills.fromDefault();
  }
}
