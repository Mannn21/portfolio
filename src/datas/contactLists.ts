import { MdOutlineMail } from "react-icons/md";
import { FiPhone } from "react-icons/fi";
import { HiOutlineHome } from "react-icons/hi2";
import { ContactListType } from "../interface/contactObjectInterface";

export const contactLists:ContactListType = [
    {
        title: "aimannurrofi21@gmail.com",
        icon: MdOutlineMail,
        target: "mailto:aimannurrofi21@gmail.com"
    },
    {
        title: "(+62)838-9568-1322",
        icon: FiPhone,
        target: "tel:+6283895681322"
    },
    {
        title: "Setu, Kabupaten Bekasi",
        icon: HiOutlineHome,
        target: "https://www.google.com/maps/place/Kec.+Setu,+Kabupaten+Bekasi,+Jawa+Barat/@-6.3587705,106.9524303,12z/data=!3m1!4b1!4m6!3m5!1s0x2e6991394a699c01:0xbb889034f6fa0a96!8m2!3d-6.3490457!4d107.0324084!16s%2Fg%2F11b_2qyb_1?entry=ttu&g_ep=EgoyMDI0MDgyMS4wIKXMDSoASAFQAw%3D%3D"
    },
] 