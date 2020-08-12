import { UserRole } from './user';

export interface Message {
    sendTime: Date;
    text: string;
    sender: UserRole;
}

export interface Chat {
    id: number;
    hasUnreadMessages: boolean;
    messages: Message[];
}
