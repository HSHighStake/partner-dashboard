export interface IHsSalarySummaryData {
  daysOfWork: number,
  basicSalary: number,
  bonusSalaryPlan: number
}

export class HsSalarySummaryData implements IHsSalarySummaryData {
  constructor(public basicSalary: number, public bonusSalaryPlan: number, public daysOfWork: number) {}
}
