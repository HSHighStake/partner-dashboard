import { ISkill } from './skill';
import { ISkillRequirement } from './skill-requirement';

export interface ISkillWithRequirement extends ISkill {
	minimumlevel: number;
}

export class SkillWithRequirement implements ISkill {
	constructor(
		public id: string,
		public name: string,
		public requiredSkills: ISkillRequirement[]
	) { }
}
