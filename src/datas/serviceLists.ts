import { ServiceListType } from "../interface/serviceObjectInterface";
import { SiJson } from "react-icons/si"; 
import { TbLayoutFilled } from "react-icons/tb"; 
import { FaDatabase } from "react-icons/fa"; 
import { MdSupport } from "react-icons/md";

export const serviceLists:ServiceListType = [
    
    {
        title: "LAYOUT",
        desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque blanditiis sequi consectetur quas. Veniam dolores ipsum quaerat modi quia pariatur deserunt.",
        icon: TbLayoutFilled,
        color: "icon1"
    },
    {
        title: "DATABASE",
        desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque blanditiis sequi consectetur quas. Veniam dolores ipsum quaerat modi quia pariatur deserunt.",
        icon: FaDatabase,
        color: "icon2"
    },
    {
        title: "RESTFUL API",
        desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque blanditiis sequi consectetur quas. Veniam dolores ipsum quaerat modi quia pariatur deserunt.",
        icon: SiJson,
        color: "icon3"
    },
    {
        title: "WEB OPTIMIZATION",
        desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque blanditiis sequi consectetur quas. Veniam dolores ipsum quaerat modi quia pariatur deserunt.",
        icon: MdSupport,
        color: "icon4"
    },
]