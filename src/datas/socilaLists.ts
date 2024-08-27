import { FaInstagram, FaXTwitter } from "react-icons/fa6";
import { RiFacebookBoxLine, RiThreadsFill } from "react-icons/ri";
import { FiGithub } from "react-icons/fi";
import { CiLinkedin } from "react-icons/ci";
import { SocialListType } from "../interface/socialObjectInteface";

export const socialLists:SocialListType = [
    {
        title: "Instagram",
        icon: FaInstagram,
        target: "https://www.instagram.com/man_rfii"
    },
    {
        title: "Facebook",
        icon: RiFacebookBoxLine,
        target: "https://www.facebook.com/aimanurrofi.masters"
    },
    {
        title: "Thread",
        icon: RiThreadsFill,
        target: "https://www.threads.net/@man_rfii"
    },
    {
        title: "Twitter",
        icon: FaXTwitter,
        target: "https://twitter.com/Mannn1002"
    },
    {
        title: "Github",
        icon: FiGithub,
        target: "https://github.com/Mannn21"
    },
    {
        title: "LinkedIn",
        icon: CiLinkedin,
        target: "https://www.linkedin.com/in/aimanurrofi"
    }
]