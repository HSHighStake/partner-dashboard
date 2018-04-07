import { Url } from 'url';
import { ISkillRequirement } from './skill-requirement';

export interface ISkill {
	id: string;
	name: string;
	requiredSkills: ISkillRequirement[];
}

export class Skill {
	static basic(id: string, name: string) {
		return new this(id, name, []);
	}

	constructor(
		public id: string,
		public name: string,
		public requiredSkills: ISkillRequirement[]
	) {}
}
