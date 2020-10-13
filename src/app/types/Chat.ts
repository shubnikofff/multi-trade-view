import { UserRoleEnum } from '@type/User';

export type Message = {
    id: number;
    sendTime: Date;
    text: string;
    sender: UserRoleEnum;
}

export type Chat = {
    id: number;
    hasUnreadMessages: boolean;
    messages: number[];
}
