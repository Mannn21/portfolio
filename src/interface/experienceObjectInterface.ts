import { IconType } from 'react-icons';

interface ExperienceInterface {
    title: string,
    duration: string,
    desc: string,
    icon: IconType,
    color: string
}

export type ExperienceListType = ExperienceInterface[];