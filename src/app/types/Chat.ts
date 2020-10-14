import { UserRoleEnum } from '@type/User';

export type Message = {
    id: number;
    sender: UserRoleEnum;
    senderId: number;
    sendTime: Date;
    text: string;
}

export type Chat = {
    id: number;
    hasUnreadMessages: boolean;
    messages: number[];
}
