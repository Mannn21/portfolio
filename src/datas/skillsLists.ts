import { SkillsList } from "../interface/skillsObjectInterface";
import { TbLayoutDashboardFilled } from "react-icons/tb";
import { FaServer, FaTools } from "react-icons/fa";

export const skills: SkillsList = [
    {
        title: "Frontend",
        points: [
            "HTML & CSS",
            "Javascript",
            "React",
            "Next",
            "Tailwind",
            "Bootstrap"
        ],
        color: "icon9",
        icon: TbLayoutDashboardFilled
    },
    {
        title: "Backend",
        points: [
            "Restful Api",
            "Authentication",
            "Node Js",
            "Databases",
            "Express",
            "Nest",
        ],
        color: "icon10",
        icon: FaServer
    },
    {
        title: "Tools",
        points: [
            "Code Editor",
            "Postman",
            "Mysql & Mongodb",
            "Git",
            "Corel Draw",
            "Figma"
        ],
        color: "icon11",
        icon: FaTools
    },
]