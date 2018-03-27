import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-hs-salary-formular',
  templateUrl: './hs-salary-formular.component.html',
  styleUrls: ['./hs-salary-formular.component.css']
})
export class HsSalaryFormularComponent {
  technologies;
  types;

  constructor() {
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
      }
    ];
  }
}
