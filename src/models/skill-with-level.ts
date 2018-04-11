import { Url } from 'url';
import { ISkillWithRequirement } from './skill-with-requirement';
import { ISkill } from './skill';
import { ISkillRequirement } from './skill-requirement';

export interface ISkillWithLevel extends ISkill {
	level: number;
}

export class SkillWithLevel {
	static basic(id: string, name: string, level: number) {
		return new this(id, name, level, []);
	}

	constructor(
		public id: string,
		public name: string,
		public level: number,
		public requiredSkills: ISkillRequirement[]
	) {}
}
