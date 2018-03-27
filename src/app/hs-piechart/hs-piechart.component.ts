import { Component } from '@angular/core';

@Component({
  selector: 'app-hs-piechart',
  templateUrl: './hs-piechart.component.html',
  styleUrls: ['./hs-piechart.component.css']
})
export class HsPiechartComponent {
  id = 'chart1';
  width = 1000;
  height = 400;
  type = 'pie3d';
  dataFormat = 'json';
  dataSource;
  title = 'HS High Stake income Composition';

  constructor() {

    this.dataSource = {
      'chart': {
        'caption': 'Composition by income type',
        'showValues': '1',
        'numberSuffix': '€',
        'theme': 'hulk-light',
        'enableMultiSlicing': '0'
      },
      'data': [{
        'label': 'Hotel',
        'value': '22000'
      }, {
        'label': 'Commute',
        'value': '6000'
      }, {
        'label': 'Social security contributions',
        'value': '25000'
      }, {
        'label': 'Royalty',
        'value': '15000'
      }, {
        'label': 'Basic salary',
        'value': '50000'
      }, {
        'label': 'Bonus',
        'value': '32000'
      }]
    };
  }
}
