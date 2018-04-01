
export class FusionChartPieChartData {
  constructor(public chart: FusionChart, public data: LabelValue[]) {

  }
}

export class FusionChart {
    constructor(
      public caption: string,
      public showValue: boolean,
      public numberSuffix: string,
      public theme: string,
      public enableMultiSlicing: boolean
  ) {
  }
}

export class LabelValue {
  constructor(
    public label: string,
    public value: number
  ) {

  }
}
