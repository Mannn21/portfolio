import { ServiceListType } from "../interface/serviceObjectInterface";
import { SiJson } from "react-icons/si"; 
import { TbLayoutFilled } from "react-icons/tb"; 
import { FaDatabase } from "react-icons/fa"; 
import { MdSupport } from "react-icons/md";

export const serviceLists:ServiceListType = [
    
    {
        title: "LAYOUT",
        desc: "Offering responsive and engaging website layout design services, tailored to your needs and preferences. We create a professional and appealing website that is easily accessible to users with an aesthetic appearance.",
        icon: TbLayoutFilled,
        color: "icon1"
    },
    {
        title: "DATABASE",
        desc: "Providing secure and reliable database management services to ensure your data is well-stored. I can also design and optimize data structures for greater efficiency and optimal performance.",
        icon: FaDatabase,
        color: "icon2"
    },
    {
        title: "RESTFUL API",
        desc: "Providing reliable and well-structured RESTful API development services to optimize data communication between the client and server. Ensuring seamless and efficient integration to facilitate easy development and management.",
        icon: SiJson,
        color: "icon3"
    },
    {
        title: "WEB OPTIMIZATION",
        desc: "Providing website optimization services, including speeding up loading times, enhancing user experience, and optimizing SEO. This ensures that your website is more accessible and efficient.",
        icon: MdSupport,
        color: "icon4"
    },
]