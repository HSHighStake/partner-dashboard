import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Skill } from '../../models/skill';
import { SkillWithLevel } from '../../models/skill-with-level';
import { SkillWithRequirement } from '../../models/skill-with-requirement';
import { MainSkills } from '../../models/main-skills';
import { ISkills } from '../../models/skills';

import {
	HsFormularDataService,
	FormField
} from '../services/hs-formular-data.service';
import { HsFormData } from '../../models/hs-form-data';

@Component({
	selector: 'app-hs-salary-formular',
	templateUrl: './hs-salary-formular.component.html',
	styleUrls: ['./hs-salary-formular.component.css']
})
export class HsSalaryFormularComponent {
	technologies;
	types;
	levels;
	payouts;
	working_time_types;
	reserves;
	holidays;
	isFrontend = true;

	hsFormData: HsFormData;
	@Output() valueChanged = new EventEmitter();

	changedValue() {
		this.valueChanged.emit(this.hsFormData);
	}

	setTechnology(event: any) {
		this.hsFormData.technology = event.target.value;
		this.changedValue();
	}

	setLevel(event: any) {
		this.hsFormData.level = event.target.value;
		this.changedValue();
	}

	setType(event: any) {
		this.hsFormData.type = event.target.value;
		this.changedValue();
	}

	setHolidays(event: any) {
		this.holidays = event.target.value;
		this.changedValue();
	}

	checkTypeOfDevelopment(event: any) {
		this.isFrontend = event.target.value === 'frontend';
		this.setType = event.target.value;
		this.changedValue();
	}

	formChanged(event: any) {
		this.formularDataService.formDataUpdate(
			new FormField(event.target.name, event.target.value)
		);
	}

	// @todo #3 This should developed as a small service.
	// @todo #3 Whats the problem!
	constructor(private formularDataService: HsFormularDataService) {
		this.types = [
			{
				label: 'Frontend',
				id: 'frontend'
			},
			{
				label: 'Backend',
				id: 'backend'
			},
			{
				label: 'Fullstack',
				id: 'fullstack'
			}
		];
		this.technologies = [
			{
				label: 'C#',
				id: 'c_sharp'
			},
			{
				label: 'Java',
				id: 'java'
			},
			{
				label: 'JavaScript',
				id: 'javascript'
			}
		];
		this.levels = [
			{
				label: 'Junior',
				id: 'junior'
			},
			{
				label: 'Middle',
				id: 'middle'
			},
			{
				label: 'Senior',
				id: 'senior'
			}
		];
		this.hsFormData = new HsFormData(
			this.technologies[0],
			this.levels[0],
			this.types[0]
		);

		/*
    this.payouts = [
      {
        label: 'Weekly',
        id: 'weekly'
      },
      {
        label: 'Monthly',
        id: 'monthly'
      },
      {
        label: 'Quarterly',
        id: 'quarterly'
      },
      {
        label: 'Yearly',
        id: 'yearly'
      }
	];
	*/
		/*
    this.working_time_types = [
      {
        label: '4 days x 8 hours',
        id: '4_days_8_hours'
      },
      {
        label: '4 days x 10 hours',
        id: '4_days_10_hours'
      },
      {
        label: '5 days x 8 hours',
        id: '5_days_8_hours'
      },
      {
        label: '5 days x 6 hours',
        id: '5_days_6_hours'
      }
    ];
    this.reserves = [
      {
        label: 'Reserves for holiday pay',
        id: 'holiday_pay'
      },
      {
        label: 'Reserves for Christmas pay',
        id: 'christmas_pay'
      },
    ];
	this.holidays = 24;
	*/
	}
}
