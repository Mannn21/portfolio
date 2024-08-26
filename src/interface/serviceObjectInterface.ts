import { IconType } from 'react-icons';

interface ServiceInterface {
    title: string,
    desc: string,
    icon: IconType,
    color: string
}

export type ServiceListType = ServiceInterface[];