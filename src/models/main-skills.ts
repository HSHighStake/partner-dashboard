import { ISkills } from "./skills";
import { ISkill, Skill } from "./skill";
import { SkillWithRequirement } from "./skill-with-requirement";
import { SkillRequirement } from "./skill-requirement";

export class MainSkills implements ISkills {
	_ids: string[];
	_skills: ISkill[];

	static fromDefault() {
		return new this(
      [
        "frontend",
        "backend",
        "fullstack"
      ]
		)
	}
	constructor(baseSkills: string[]) {
		this._ids = baseSkills;
	}

	load() {
		this._skills.push(
			Skill.basic("frontend", "Frontend Developer"),
			Skill.basic("backend", "Backend Developer"),
			Skill.basic("fullstack", "Fullstack Developer"),
			new SkillWithRequirement("java", "Java", [
				SkillRequirement.basic("frontend"),
				SkillRequirement.basic("backend"),
				SkillRequirement.basic( "fullstack")
			]),
			new SkillWithRequirement("csharp", "C#", [
				SkillRequirement.basic("frontend"),
				SkillRequirement.basic("backend"),
				SkillRequirement.basic( "fullstack")
			])
		)

	}
	values(): ISkill[] {
		return this._skills.filter(e => this._ids.indexOf(e.id) > 0);
	}
}
