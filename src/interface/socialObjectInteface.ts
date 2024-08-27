import { IconType } from 'react-icons';

interface SocialInterface {
    title: string,
    icon: IconType,
    target: string
}

export type SocialListType = SocialInterface[];