import { FaBookAtlas } from "react-icons/fa6";
import { MdDesignServices } from "react-icons/md";
import { GiTwoCoins } from "react-icons/gi";
import { SiFreelancer } from "react-icons/si";
import { ExperienceListType } from "../interface/experienceObjectInterface";

export const experienceLists:ExperienceListType = [
    {
        title: "Teacher",
        duration: "July 2020 - present",
        desc: "With 4 years of experience teaching mathematics and religious studies to children, I have also served as a mentor for all of them, from elementary to middle school levels.",
        color: "icon5",
        icon: FaBookAtlas
    },
    {
        title: "Designer",
        duration: "August 2022 - present",
        desc: "With two years of experience in creating various graphic designs, including posters, covers, and brochures, I am also capable of designing websites to make them more visually appealing.",
        color: "icon6",
        icon: MdDesignServices
    },
    {
        title: "Freelancer",
        duration: "March 2021 - present",
        desc: "Worked on various projects for the community, ranging from graphic design and website development to simple electronic device repairs.",
        color: "icon7",
        icon: SiFreelancer
    },
    {
        title: "Seller",
        duration: "October 2022 - December 2023",
        desc: "With two years of experience as a seller and trader, I have dealt with a range of products, from food and beverages to digital products such as designs and websites.",
        color: "icon8",
        icon: GiTwoCoins
    },
]