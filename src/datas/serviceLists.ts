import { ServiceListType } from "../interface/serviceObjectInterface";
import { SiCssdesignawards, SiJson } from "react-icons/si"; 
import { TbLayoutFilled } from "react-icons/tb"; 
import { FaDatabase } from "react-icons/fa"; 

export const serviceLists:ServiceListType = [
    {
        title: "DESIGN",
        desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque blanditiis sequi consectetur quas. Veniam dolores ipsum quaerat modi quia pariatur deserunt.",
        icon: SiCssdesignawards,
        color: "icon1"
    },
    {
        title: "LAYOUT",
        desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque blanditiis sequi consectetur quas. Veniam dolores ipsum quaerat modi quia pariatur deserunt.",
        icon: TbLayoutFilled,
        color: "icon2"
    },
    {
        title: "DATABASE",
        desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque blanditiis sequi consectetur quas. Veniam dolores ipsum quaerat modi quia pariatur deserunt.",
        icon: FaDatabase,
        color: "icon3"
    },
    {
        title: "RESTFUL API",
        desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque blanditiis sequi consectetur quas. Veniam dolores ipsum quaerat modi quia pariatur deserunt.",
        icon: SiJson,
        color: "icon4"
    },
]