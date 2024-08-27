import { FaBookAtlas } from "react-icons/fa6";
import { MdDesignServices } from "react-icons/md";
import { GiTwoCoins } from "react-icons/gi";
import { SiFreelancer } from "react-icons/si";
import { ExperienceListType } from "../interface/experienceObjectInterface";

export const experienceLists:ExperienceListType = [
    {
        title: "Teacher",
        duration: "July 2020 - present",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, quasi odio! Voluptatibus id alias consectetur.",
        color: "icon5",
        icon: FaBookAtlas
    },
    {
        title: "Designer",
        duration: "August 2022 - present",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, quasi odio! Voluptatibus id alias consectetur.",
        color: "icon6",
        icon: MdDesignServices
    },
    {
        title: "Freelancer",
        duration: "March 2021 - present",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, quasi odio! Voluptatibus id alias consectetur.",
        color: "icon7",
        icon: SiFreelancer
    },
    {
        title: "Seller",
        duration: "October 2022 - December 2023",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, quasi odio! Voluptatibus id alias consectetur.",
        color: "icon8",
        icon: GiTwoCoins
    },
]