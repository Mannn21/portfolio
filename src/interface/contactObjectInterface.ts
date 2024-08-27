import { IconType } from 'react-icons';

interface ContactInterface {
    title: string,
    icon: IconType,
    target: string
}

export type ContactListType = ContactInterface[];