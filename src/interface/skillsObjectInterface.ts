import { IconType } from "react-icons";

interface Skill {
    title: "Frontend" | "Backend" | "Tools",
    icon: IconType,
    color: string,
    points: string[]
}

export type SkillsList = Skill[];

