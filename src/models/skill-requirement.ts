export interface ISkillRequirement {
	id: string;
	level: number;
}

export class SkillRequirement implements ISkillRequirement {
	static basic(id: string) {
		return new this(id, 1);
	}
	constructor(public id: string, public level: number) {}
}
